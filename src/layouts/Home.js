import React from 'react';
import Header from "../components/Home/Header/Header";
import Columns from "../components/Home/Columns/Columns";
import Steps from "../components/Home/Steps/Steps";
import About from "../components/Home/About/About";
import WhoWeHelp from "../components/Home/WhoWeHelp/WhoWeHelp";
import Contact from "../components/Home/Contact/Contact";

const Home = () => {
    return(
        <>
            <Header/>
            <Columns/>
            <Steps/>
            <About/>
            <WhoWeHelp/>
            <Contact/>
        </>
    )
}

export default Home;