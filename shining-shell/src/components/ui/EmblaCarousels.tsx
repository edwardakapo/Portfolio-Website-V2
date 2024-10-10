import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import AutoScroll from 'embla-carousel-auto-scroll'
import type { EmblaCarouselType } from "embla-carousel"

type TechCarouselPropType = {
    data : string[];
}
type AboutMeCarouselPropType = {
    images : {src : string, alt : string}[]
}

const TechCarousel = (props: TechCarouselPropType) => {
    const {data} = props
    const [ emblaRef , emblaApi] = useEmblaCarousel({loop : true, watchDrag : false} , [AutoScroll( {startDelay : 0, speed : 1})])
    return (
       <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {data.map((tech, index) => (
                        <div className="embla__slide" key={tech + index}>
                            <div className="embla__slide__content tracking-wider">
                                {tech.toUpperCase()}
                            </div>
                        </div>
                    ))

                    }
                </div>
            </div>
       </section>
    )
}

const AboutMeCarousel = ( props : AboutMeCarouselPropType) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop : true, duration : 100}, [Autoplay( {delay : 10000}), Fade()])
    const {images} = props
    return (
        <div>
            <section className='embla1'>
                <div className='embla1__viewport' ref={emblaRef}>
                    <div className='embla1__container'>
                        {images.map((image, index) => (
                            <div className='embla1__slide' key={image.alt + index}>
                                <img 
                                    className="w-[380px] h-[580px] object-center
                                        max-[800px]:w-[320px] max-[800px]:h-[450px]" 
                                    alt={image.alt} src={image.src} loading='lazy'/>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}



export {TechCarousel, AboutMeCarousel}