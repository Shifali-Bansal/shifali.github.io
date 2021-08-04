import React from 'react';
import abt from "../src/images/about.jpeg";
import Common from './Common';
const About = () => {
    return (
        <>
          <Common
           name='Welcome to About page '
           imgsrc={abt} 
           visit="/contact"
            btname="Contact Now"/>
        </>
    );
};
export default About;