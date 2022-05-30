import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import GlobalStyle from './styleGlobal';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import ScrollToTop from "./scrollToTop";

//Pages
import Home from "./page/Home";
import Footer from "./components/Footer/Footer";
import Casino from "./components/Casino/Casino";
import Vavada from "./components/Vavada/Vavada";



export default function App() {
    return (
        <>
            <BrowserRouter>
                <GlobalStyle/>
                <ScrollToTop/>
                <Navbar/>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/cat" element={<Casino/>}/>
                    <Route path="/vavada" element={<Vavada/>}/>
                    <Route path="/#" element={<Home/>}/>
                </Routes>
                <Footer/>
            < /BrowserRouter>
        </>
    );
}
