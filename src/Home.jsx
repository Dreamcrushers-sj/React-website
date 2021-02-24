import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/Image/img2.gif";
import Common from "./Common";

function Home() {
    return (
          <div>
              < Common name="Grow your business with" imgsrc={web} visit="/service" btname="Get Started" />
          </div>
        )
}

export default Home;
