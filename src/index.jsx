import { BrowserRouter } from 'react-router-dom';
import { Root } from "./components/Root";
import { createRoot } from 'react-dom/client'

const element = document.getElementById('root');

createRoot(element).render(
    <Root />
)
