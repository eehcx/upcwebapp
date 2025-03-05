"use client";

import{ useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
    items: { data: { title: string }; body: string }[];
}

export default function InformationCarousel({ items }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : items.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < items.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div className="relative w-full h-[220px] flex flex-col">
            <div className="flex-grow overflow-hidden">
                <div className="h-full">
                    <div className='flex items-center justify-between'>
                        <h2 className="font-semibold text-xl text-neutral-100">{items[currentIndex].data.title}</h2>
                        <div className="flex justify-between">
                            <Button className='bg-red-500 border-red-500 hover:bg-red-600 rounded-none' variant="outline" size="icon" onClick={handlePrevious}>
                                <ChevronLeft color='#fff' size={25} />
                            </Button>
                            <Button className='bg-red-500 border-red-500 hover:bg-red-600 rounded-none' variant="outline" size="icon" onClick={handleNext}>
                                <ChevronRight color='#fff' size={25} />
                            </Button>
                        </div>
                    </div>
                    <div 
                        className="prose text-sm text-neutral-200 my-5" 
                        dangerouslySetInnerHTML={{ __html: items[currentIndex].body }} 
                    />
                </div>
            </div>
        </div>
    );
}