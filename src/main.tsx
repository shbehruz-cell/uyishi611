import { createRoot } from 'react-dom/client'
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Course from "./Course.tsx";


createRoot(document.getElementById('root')!).render(
    <>
        <Header></Header>
        <Course></Course>
        <Footer></Footer>
    </>
)
