import React from "react";
import Typewriter from "typewriter-effect";
import homeimage from './assets/home.jpg'

import "./Landing.css";
const Landing = () => {
    return (
        <div className="landing-container">
            <div data-aos="fade-right" className="landing-left">
                <h1 className="landing-header">MAKE YOUR MENTAL HEALTH YOUR PRIORITY</h1>
                <div className="typewriter-container">
                    <Typewriter
                        options={{
                            strings: ["Just because you don't understand it doesn't mean it isn't so.",
                             "The only journey is the journey within", 
                             "What mental health needs is more sunlight, more candor, and more unashamed conversation."],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className="landing-right">
                <img  data-aos="fade-left"
                    className="home-image"
                    src={homeimage}
                    alt="home"
                />
            </div>
           
        </div>
    );
};

export default Landing;