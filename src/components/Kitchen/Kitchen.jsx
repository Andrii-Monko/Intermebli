import { useState } from "react";
import './Kitchen.scss';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const kitchen = [
    '/img/kitchen/1.png',
    '/img/kitchen/2.png',
    '/img/kitchen/3.png',
    '/img/kitchen/4.png',
    '/img/kitchen/5.png',
    '/img/kitchen/6.png',
    '/img/kitchen/7.png',
    '/img/kitchen/8.png',
    '/img/kitchen/9.png',
    '/img/kitchen/10.png',
    '/img/kitchen/11.png',
    '/img/kitchen/12.png',
    '/img/kitchen/13.png',
    '/img/kitchen/14.png'
];

export const Kitchen = () => {
    const [BannersPerPage] = useState(1);
    const [activeIndex, setActiveIndex] = useState(1);

    const lastBannerIndex = activeIndex * BannersPerPage;
    const firstBannerindex = lastBannerIndex - BannersPerPage;
    const currentKitchenPhoto = kitchen.slice(firstBannerindex, lastBannerIndex);

    const prevBannerPhoto = () => {
        if (activeIndex > 0) {
            setActiveIndex(prev => prev - 1);
        }

        if (activeIndex === 1) {
            setActiveIndex(kitchen.length);
        }
    };

    const nextBannerPhoto = () => {
        if (activeIndex < kitchen.length) {
            setActiveIndex(prev => prev + 1);
        }

        if (activeIndex === kitchen.length) {
            setActiveIndex(kitchen.length - 13);
        }
    };

    return (
        <div className="kitchen">
            <div className="kitchen__container">
                <h1 className="kitchen__title">
                    КУХНІ
                </h1>
                <div className="kitchen__box">
                    <button
                        onClick={prevBannerPhoto}
                        className="kitchen__button"
                    >
                        <FaChevronLeft className="kitchen__button-icon" />
                    </button>
                    {currentKitchenPhoto.map((data) =>
                        <img
                            src={data}
                            key={data}
                            alt="photo"
                            className="kitchen__photo"
                        />
                    )}
                    <button
                        onClick={nextBannerPhoto}
                        className="kitchen__button"
                    >
                        <FaChevronRight className="kitchen__button-icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}