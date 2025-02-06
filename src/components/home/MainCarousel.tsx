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

interface Props {
    images: { src: string; alt?: string }[];
    video: string;
}

const MainCarousel: React.FC<Props> = ({ images, video }) => {
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
    
    return (
        <div className="mx-auto w-full h-screen relative bg-neutral-900">
            <Carousel setApi={setApi} className="w-full h-full">
                <CarouselContent>
                    <CarouselItem className="relative w-full h-screen">
                        <Card className="w-full h-full overflow-hidden">
                            <CardContent className="p-0 w-full h-full">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 object-cover"
                                >
                                    <source src={video} type="video/mp4" />
                                    Tu navegador no soporta la reproducción de videos.
                                </video>
                            </CardContent>
                        </Card>
                    </CarouselItem>

                    {images.map((image, index) => (
                        <CarouselItem key={index} className="relative w-full h-screen">
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

                <CarouselPrevious className="absolute left-4 inset-y-1/2 -translate-y-1/2 border-red-600 bg-red-600 text-white rounded-none p-5 hover:bg-red-800 hover:border-red-800 hover:text-white transition shadow-lg" />
                <CarouselNext className="absolute right-4 inset-y-1/2 -translate-y-1/2 border-red-600 bg-red-600 text-white rounded-none p-5 hover:bg-red-800 hover:border-red-800 hover:text-white transition shadow-lg" />

            </Carousel>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-sm text-white bg-neutral-950/70 px-3 py-1 rounded-none select-none">
                {current} de {count}
            </div>
        </div>
    );
};

export default MainCarousel;