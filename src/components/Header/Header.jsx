import './Header.scss';
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
export const Header = () => {

    return (
        <header className="header">
            <div className='header__container'>
                <Link to='/'>
                    <img
                        src="/img/logo.png"
                        alt="САЛОН МЕБЛІВ ІНТЕРМЕБЛІ"
                        className='header__logo'
                    />
                </Link>

                <nav className='header__nav goods-nav'>
                    <ul className='header__list'>
                        <Link to='/kitchen' className='header__link'>
                            КАТЕГОРІЇ
                        </Link>
                    </ul>
                </nav>

                <h3 className='header__title'>
                    Максимальна якість <br /> у кожній деталі
                </h3>

                <nav className='header__nav contacts-nav'>
                    <ul className='header__list'>
                        <li className='header__link header__icon-box'>
                            <a
                                href="https://www.instagram.com/intermebli/"
                                target='blank'
                                className='header__item'
                            >
                                <RiInstagramFill className='header__icon' />
                            </a>
                        </li>
                        <li className='header__link header__icon-box'>
                            <a
                                href="https://www.facebook.com/intermebeluman2008/?paipv=0&eav=AfagJ2QFElqgzjBi1layfW3kp8g-rLaiHFDd0hhY6wMMnzT6iv9TyxrCjCDHazOtJ64&_rdr"
                                target='blank'
                                className='header__item'
                            >
                                <FaFacebookF className='header__icon' />
                            </a>
                        </li>
                        <li className='header__link header__icon-box'>
                            <a
                                href="mailto:smile_mebli@ukr.net"
                                target='blank'
                                title='smile_mebli@ukr.net'
                                className='header__item'
                            >
                                <MdEmail className='header__icon' />
                            </a>
                        </li>
                        <li className='header__link header__icon-box'>
                            <a
                                title='+38 (096) 481 87 53'
                                href="tel:096 481 87 53"
                                className='header__item'
                            >
                                <FaPhoneVolume className='header__icon' />
                            </a>
                        </li>
                    </ul>
                </nav>

                <button className='header__menu'>
                    <IoMdMenu className='header__menu-icon' />
                </button>
            </div>
        </header>
    )
}