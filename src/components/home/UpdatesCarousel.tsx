"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import LazyLoadImage from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";  

interface Props {
    images: { src: string; alt?: string; size?: string }[]; 
}

const UpdatesCarousel: React.FC<Props> = ({ images }) => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    React.useEffect(() => {
        if (!api) return;

        const interval = setInterval(() => {
            if (current === count) {
                api.scrollTo(0);
            } else {
                api.scrollNext();
            }
        }, 10000); 

        return () => clearInterval(interval);
    }, [api, current, count]);

    // Detectar el tamaño de la pantalla
    const isMobile = window.innerWidth <= 768;

    return (
        <div className="mx-auto w-full h-screen relative bg-neutral-900">
            <Carousel setApi={setApi} className="w-full h-full">
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index} className="relative w-full h-screen">
                            <Card className="w-full h-full overflow-hidden">
                                <CardContent className="p-0 w-full h-full">
                                    <LazyLoadImage
                                        src={image.src}
                                        alt={image.alt || `Imagen ${index + 1}`}
                                        className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 object-cover"
                                        loading="lazy"
                                        effect="blur" // Efecto de desenfoque al cargar
                                        width={image.size || '100%'} // Permitir cambiar el tamaño
                                        height={image.size || 'auto'} // Tamaño dinámico
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="absolute left-4 inset-y-1/2 -translate-y-1/2 bg-red-600 text-white rounded-none p-5 hover:bg-red-800 hover:text-white transition" />
                <CarouselNext className="absolute right-4 inset-y-1/2 -translate-y-1/2 bg-red-600 text-white rounded-none p-5 hover:bg-red-800 hover:text-white transition" />
            </Carousel>

            {isMobile ? (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-sm text-white bg-neutral-950/70 px-3 py-1 rounded-none select-none">
                    {current} de {count}
                </div>
            ) : (
                <section className="h-screen w-full flex items-center justify-center gap-4">
                    {images.map((image, index) => (
                        <LazyLoadImage
                            key={index}
                            src={image.src}
                            className="bg-transparent shadow-lg"
                            height={200}
                            alt={image.alt || `Imagen ${index + 1}`}
                            draggable="false"
                            loading="lazy"
                            effect="blur"
                            width="auto"
                        />
                    ))}
                </section>
            )}
        </div>
    );
};

export default UpdatesCarousel;