import React from 'react';
import Navbar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Skills from "./components/Skills.jsx";
import Companies from "./components/Companies.jsx";
import Portfolio from "./components/Portfolio.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div>
            <NavBar/>
            <Home/>
            <AboutMe/>
            <Skills/>
            <Portfolio/>
            <Companies/>
            <ContactUs/>
            <Footer/>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};

export default App;