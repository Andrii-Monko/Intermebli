import './Team.scss';

export const Team = () => (
    <div className="team">
        <div className="team__container">
            <h1 className='team__title'>
                НАША КОМАНДА
            </h1>

            <div className='team__content'>
                <div className="team__box">
                    <div className='team__photo victor'>
                    </div>

                    <div className='team__name-box'>
                        <h1 className='team__name'>
                            МОНЬКО <br /> Віктор
                        </h1>

                        <p className='team__describe'>
                            КРУТИЙ ОПИС КРУТОГО ДИРЕКТОРА
                        </p>
                    </div>
                </div>

                <div className="team__box">
                    <div className='team__photo olga'>
                    </div>

                    <div className='team__name-box'>
                        <h1 className='team__name'>
                            БАРКАЄВА <br /> Ольга
                        </h1>

                        <p className='team__describe'>
                            КРУТИЙ ОПИС КРУТОГО ДИРЕКТОРА
                        </p>
                    </div>
                </div>

                <div className="team__box">
                    <div className='team__photo oleksandr'>
                    </div>

                    <div className='team__name-box'>
                        <h1 className='team__name'>
                            СЕДЛЕЦЬКИЙ <br /> Олександр
                        </h1>

                        <p className='team__describe'>
                            КРУТИЙ ОПИС КРУТОГО ДИРЕКТОРА
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)