import { Link } from 'react-router-dom';
import './KitchenDetailPage.scss';
import { Header } from "../Header/Header";

export const KitchenDetailPage = () => {

    return (
        <>
            <Header />
            <div className='kitchen-detail'>
                <div className='kitchen-detail__container'>
                    <h1 className='kitchen-detail__title'>
                        Кухні на замовлення
                    </h1>

                    <p className='kitchen-detail__describe'>

                    </p>
                    
                </div>
            </div>
        </>
    )
}