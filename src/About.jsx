import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/Image/img2.gif";
import Common from "./Common";

function About() {
    return (
        <div>
            < Common name="Welcome to About page" imgsrc={web} visit="/contact" btname="Contact Now"/>
        </div>
    );
};

export default About;
