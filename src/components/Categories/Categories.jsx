import './Categories.scss';

export const Categories = () => {

    return (
        <div className="categories">
            <a
                href="#kitchen"
                className='categories__box'
            >
                <img
                    src="/img/kitchen.jpg"
                    alt="kitchen-photo"
                    className='categories__photo'
                />

                <h1 className='categories__text'>
                    КУХНІ
                </h1>
            </a>

            <a
                href="#livingRoom"
                className='categories__box'
            >
                <img
                    src="/img/livingRoom.png"
                    alt="living-roon-photo"
                    className='categories__photo'
                />

                <h1 className='categories__text'>
                    ВІТАЛЬНІ
                </h1>
            </a>

            <a
                href="#kitchen"
                className='categories__box'
            >
                <img
                    src="/img/bathroom.jpg"
                    alt="bathroom-photo"
                    className='categories__photo'
                />

                <h1 className='categories__text'>
                    ВАННІ КІМНАТИ
                </h1>
            </a>
        </div>
    )
}