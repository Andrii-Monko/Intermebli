import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from '../App';
import { KitchenDetailPage } from './KitchenDetailPage/KitchenDetailPage';

export const Root = () => {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/kitchen' element={<KitchenDetailPage />} />
            </Routes>
        </Router>

    )
}