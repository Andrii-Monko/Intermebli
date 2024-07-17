import './Footer.scss';

export const Footer = () => {

    return (
        <footer className="footer">
            <div className='footer__container'>
                <div className='footer__catalog'>

                    <h1 className='footer__title'>
                        Каталог товарів
                    </h1>

                    <p className='footer__text'>
                        Кухні на замовлення
                    </p>

                    <p className='footer__text'>
                        Вітальні на замовлення
                    </p>

                    <p className='footer__text'>
                        Ванні кімнати на замовлення
                    </p>

                    <p className='footer__text'>
                        Гардеробні на замовлення
                    </p>

                    <p className='footer__text'>
                        Дитячі меблів на замовлення
                    </p>

                </div>

                <div className='footer__company-info'>
                    <h1 className='footer__title'>
                        Про Компанію
                    </h1>

                    <p className='footer__text'>
                        Виробництво
                    </p>

                    <a
                        href="#team"
                        className='footer__text'
                    >
                        Наша команда
                    </a>

                    <p className='footer__text'>
                        Контакти
                    </p>
                </div>

                <div className='footer__bottom-box'>
                    <div>
                        ікони контактів
                    </div>


                    <h1 className='footer__title'>
                        ІНТЕРМЕБЛІ
                    </h1>

                    <div>
                        меблі на замовлення
                    </div>
                </div>
            </div>
        </footer>

    )
}