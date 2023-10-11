import React from 'react';
import img2 from '../assets/images/img2.jpeg'
import img3 from '../assets/images/img3.jpeg'
import img4 from '../assets/images/img4.jpeg'
import img5 from '../assets/images/img5.jpeg'
import img6 from '../assets/images/img6.jpg'
import img7 from '../assets/images/img7.jpg'

const images = [
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
];

const Carousel = () => {
    return (
        <div className="whitespace-nowrap overflow-hidden flex gap-10">
            <div className="flex flex-shrink-0 items-center h-[90vw] lg:h-[50vh] gap-10 animate-slider">
                {images.map((link, idx) => {
                    return (
                        <div key={idx} className="w-full h-full">
                            <img
                                className="h-full"
                                src={link}
                                alt="carousel"
                            />
                        </div>
                    );
                })}
            </div>
            <div className="flex flex-shrink-0 items-center h-[90vw] lg:h-[50vh] gap-10 animate-slider">
                {images.map((link, idx) => {
                    return (
                        <div key={idx} className="w-full h-full">
                            <img
                                className="h-full"
                                src={link}
                                alt="carousel"
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Carousel;
