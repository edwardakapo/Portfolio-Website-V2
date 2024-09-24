import React from "react";
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import '@/styles/techCarousel.css'
type DataType = {
    // icon : string;
    text : string; 
}
type PropType = {
    data : string[];
}

export default function TechCarousel(props: PropType){
    const {data} = props
    const [ emblaRef , emblaApi] = useEmblaCarousel({loop : true, duration : 6000, watchDrag : false} , [Autoplay( {delay : 10,} )])
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