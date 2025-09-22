"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card.tsx";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel.tsx";

interface Props {
    images: { src: string; alt?: string }[];
}

export const MainCarousel: React.FC<Props> = ({ images }) => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;

        // Pequeño delay para asegurar que el DOM está listo
        const timer = setTimeout(() => {
            setCount(api.scrollSnapList().length);
            setCurrent(api.selectedScrollSnap() + 1);
        }, 100);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });

        return () => clearTimeout(timer);
    }, [api]);

    React.useEffect(() => {
        if (!api || count === 0) return;

        const interval = setInterval(() => {
            if (current >= count) {
                api.scrollTo(0);
            } else {
                api.scrollNext();
            }
        }, 10000); 

        return () => clearInterval(interval);
    }, [api, current, count]);
    
    return (
        <div className="mx-auto w-full h-screen relative bg-neutral-900 z-0">
            <Carousel setApi={setApi} className="w-full h-full">
                <CarouselContent>
                    <CarouselItem key="video" className="relative w-full h-screen">
                        <Card className="w-full h-full overflow-hidden">
                            <CardContent className="p-0 w-full h-full">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 object-cover"
                                >
                                    <source src="trailer.webm" type="video/webm" />
                                    Tu navegador no soporta la reproducción de videos.
                                </video>
                            </CardContent>
                        </Card>
                    </CarouselItem>

                    {images?.map((image, index) => (
                        <CarouselItem key={`img-${index}`} className="relative w-full h-screen">
                            <Card className="w-full h-full overflow-hidden">
                                <CardContent className="p-0 w-full h-full">
                                    <img
                                        src={image.src}
                                        alt={image.alt || `Imagen ${index + 1}`}
                                        className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 object-cover"
                                        loading="lazy"
                                    />
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="absolute left-4 inset-y-1/2 -translate-y-1/2 border-neutral-700 bg-neutral-700 text-white rounded-none p-5 hover:bg-neutral-800 hover:border-neutral-800 hover:text-white transition shadow-lg" />
                <CarouselNext className="absolute right-4 inset-y-1/2 -translate-y-1/2 border-neutral-700 bg-neutral-700 text-white rounded-none p-5 hover:bg-neutral-800 hover:border-neutral-800 hover:text-white transition shadow-lg" />
            </Carousel>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-sm text-white bg-neutral-950/70 px-3 py-1 rounded-none select-none">
                {current} de {count}
            </div>
        </div>
    );
};