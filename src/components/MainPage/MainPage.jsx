import './MainPage.scss';
import { Header } from "../Header/Header";
import { Kitchen } from "../Kitchen/Kitchen";
import { Categories } from '../Categories/Categories';
import { LivingRoom } from '../LivingRoom/LivingRoom';
import { Team } from '../Team/Team';
import { Footer } from '../Footer/Footer';

export const MainPage = () => (
    <main className="mainPage">
        <Header />
        <Categories />
        <div id='kitchen'>
            <Kitchen />
        </div>

        <div id='team'>
            <Team />
        </div>

        <div id='livingRoom'>
            <LivingRoom />
        </div>
        <Footer />
    </main>
)