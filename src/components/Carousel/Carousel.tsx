"use client";
import React, { useEffect, useRef, useState, useMemo, ReactElement } from "react";
import { ResizeObserver } from 'resize-observer';

export const Carousel = ({ data, activeIndex = 0 }: {
    data: ReactElement[],
    activeIndex?: number,
}) => {
    const [currentImg, setCurrentImg] = useState(activeIndex)
    const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
    const carouselRef = useRef(null);

    const resizeObserver = useMemo(() => new ResizeObserver(([entry]) => {
        let { width, height } = entry.target?.getBoundingClientRect() || {};
        if (width && height) {
            setCarouselSize({
                width,
                height,
            })
        }
    }), []);

    useEffect(() => {
        let elem = carouselRef.current as unknown as HTMLDivElement

        resizeObserver.observe(elem);
        return () => {
            resizeObserver.disconnect();
        }
    }, [resizeObserver]);

    return (
        <>
            <div className='w-full h-full rounded-md overflow-hidden relative mb-5' ref={carouselRef}>
                {/* Image container */}
                <div
                    style={{
                        left: -(carouselSize.width * (carouselSize.width < 768 ? 1 : 0.75) * currentImg)
                    }}
                    className='w-full md:w-3/4 absolute h-full flex transition-all duration-300'>
                    {data.map((component, i) => (
                        <div key={i} className='relative shrink-0 w-full h-full md:pr-5'>
                            {component}
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-center'>
                <button
                    disabled={currentImg === 0}
                    onClick={() => setCurrentImg(prev => prev - 1)}
                    className={`border rounded-md px-3 py-1 ml-4 font-bold${currentImg === 0 ? " opacity-50" : ""}`}
                >
                    {"<"}
                </button>
                <button
                    disabled={currentImg === data.length - 1}
                    onClick={() => setCurrentImg(prev => prev + 1)}
                    className={`border rounded-md px-3 py-1 ml-4 font-bold${currentImg === data.length - 1 ? " opacity-50" : ""}`}
                >
                    {">"}
                </button>
            </div>
        </>
    )
}