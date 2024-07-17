import { useState } from "react";
import './LivingRoom.scss';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const livingRoom = [
    '/img/living/1.png',
    '/img/living/2.png',
    '/img/living/3.png',
    '/img/living/4.png',
    '/img/living/5.png',
    '/img/living/6.png',
    '/img/living/7.png'
];

export const LivingRoom = () => {
    const [BannersPerPage] = useState(1);
    const [activeIndex, setActiveIndex] = useState(1);

    const lastBannerIndex = activeIndex * BannersPerPage;
    const firstBannerindex = lastBannerIndex - BannersPerPage;
    const currentLivinRoomPhoto = livingRoom.slice(firstBannerindex, lastBannerIndex);

    const prevBannerPhoto = () => {
        if (activeIndex > 0) {
            setActiveIndex(prev => prev - 1);
        }

        if (activeIndex === 1) {
            setActiveIndex(livingRoom.length);
        }
    };

    const nextBannerPhoto = () => {
        if (activeIndex < livingRoom.length) {
            setActiveIndex(prev => prev + 1);
        }

        if (activeIndex === livingRoom.length) {
            setActiveIndex(livingRoom.length - 6);
        }
    };

    return (
        <div className="livingRoom">
            <div className="livingRoom__container">
                <h1 className="livingRoom__title">
                    ВІТАЛЬНІ
                </h1>

                <div className="livingRoom__box">
                    <button
                        onClick={prevBannerPhoto}
                        className="livingRoom__button"
                    >
                        <FaChevronLeft className="livingRoom__button-icon" />
                    </button>
                    {currentLivinRoomPhoto.map((data) =>
                        <img
                            src={data}
                            key={data}
                            alt="photo"
                            className="livingRoom__photo"
                        />
                    )}
                    <button
                        onClick={nextBannerPhoto}
                        className="livingRoom__button"
                    >
                        <FaChevronRight className="livingRoom__button-icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}