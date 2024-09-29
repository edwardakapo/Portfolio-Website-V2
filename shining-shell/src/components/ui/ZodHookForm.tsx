import {useForm} from "react-hook-form"
import type {SubmitHandler} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from "sonner"
import { error } from "node_modules/astro/dist/core/logger/core"

const schema = z.object({
    name : z.string().min(3),
    email : z.string().min(1, {message : "(required)"}).email({message : "invalid email address"}),
    subject : z.string().min(1),
    message : z.string().min(1),
    important : z.string() // honeypot for bots
})

type FormFields = z.infer<typeof schema>

const SpinnerSvg = ( ) => (
<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
	<path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity={0.25}></path>
	<path fill="currentColor" d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
		<animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform>
	</path>
</svg>
)

const DiscordWebHookURL = import.meta.env.PUBLIC_DISCORD_URL
const MainContactForm = () => {
    const {register, handleSubmit, formState : {errors, isSubmitting}, reset} = useForm<FormFields>( {resolver : zodResolver(schema)});
    
    const onSubmit : SubmitHandler<FormFields> = async (data) => {
        
        console.log(data)
        // to catch bots
        if (data.important) {
            return
        }

        //allow the spinner to spin for a bit
        await new Promise((resolve) => setTimeout(resolve , 1000))

        //try to send discord webhook
        const webhookBody = {
            embeds : [{
                title : data.subject,
                fields : [
                    {name : 'Name', value : data.name},
                    {name : 'Email', value : data.email},
                    {name : 'Message', value : data.message}
                ]
            }]
        }

        try {
            const response = await fetch(DiscordWebHookURL, {
                method: 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify(webhookBody)
            })
            if (!response.ok) {
                throw error
            }
            toast.success("Message Recieved! I'll respond as soon as I can.")
        } catch (error) {
            toast.error("Error sending message")
            console.error(error)
            return
        } finally {
            reset();
        }
    }

 return  (
        <div>
            <form className="flex flex-col gap-y-5" onSubmit={handleSubmit(onSubmit)}>
             {/* Honeypot field*/}
             <input {...register("important")} type="text" className="hidden" />

             {/* Name Field */}
             <div className="flex flex-col">
                 <label htmlFor="name" className="pb-2"> Name <span className={`text-sm ml-1 ${errors.name ? "text-red-500" : "text-gray-400"}`}> &#40;required&#41;</span></label>
                 <input
                     {...register("name")}
                     type="text"
                     id="name"
                     className={`border ${errors.name ? "border-red-500 bg-red-50" : "border-stone-400 bg-gray-50"} p-2 w-[500px]`}
                 />
             </div>

             {/* Email Field */}
             <div className="flex flex-col">
                 <label htmlFor="email" className="pb-2"> Email Address <span className={`text-sm ml-1 ${errors.email ? "text-red-500" : "text-gray-400"}`}> {errors.email ? errors.email.message : "(required)"}</span></label>
                 <input
                     {...register("email")}
                     type="text"
                     id="email"
                     className={`border ${errors.email ? "border-red-500 bg-red-50" : "border-stone-400 bg-gray-50"} p-2 w-[500px]`}
                 />
             </div>

             {/* Subject Field */}
             <div className="flex flex-col">
                 <label htmlFor="subject" className="pb-2"> Subject <span className={`text-sm ml-1 ${errors.subject ? "text-red-500" : "text-gray-400"}`}> &#40;required&#41;</span></label>
                 <input
                     {...register("subject")}
                     type="text"
                     id="subject"
                     placeholder="Let's work together!"
                     className={`border ${errors.subject ? "border-red-500 bg-red-50" : "border-stone-400 bg-gray-50"} p-2 w-[500px]`}
                 />
             </div>

             {/* Message Field */}
             <div className="flex flex-col">
                 <label htmlFor="message" className="pb-2"> Message <span className={`text-sm ml-1 ${errors.message ? "text-red-500" : "text-gray-400"}`}> &#40;required&#41;</span></label>
                 <textarea
                     {...register("message")}
                     id="message"
                     placeholder="What can I help you with today?"
                     className={`border ${errors.message ? "border-red-500 bg-red-50" : "border-stone-400 bg-gray-50"} p-2 w-[500px] h-[150px] resize-none`}
                 />
             </div>

             <button 
                type="submit" 
                className="flex items-center justify-center  mt-2 w-[125px] h-[55px] border-2 border-black p-3 tracking-wider font-bold rounded-sm hover:bg-focus-color hover:text-white hover:border-focus-color"
                disabled={isSubmitting}    
            >
                {isSubmitting ? <SpinnerSvg /> : "SUBMIT"}
             </button>
         </form>
        </div>
    )

}


export {MainContactForm}