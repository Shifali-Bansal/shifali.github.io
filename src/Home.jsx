import React from 'react';
import web from "../src/images/home.jpeg";
import Common from './Common';
const Home = () => {
    return (
        <>
          
           <Common
           name='Grow your skills with '
           imgsrc={web} 
           visit="/services"
            btname="Get Started"/>
        </>
    );
};
export default Home;