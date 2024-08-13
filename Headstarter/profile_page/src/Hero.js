import React from 'react';
import './Hero.css';

const Hero = () => (
    <section id="hero">
        <div className="hero-content">
            <img src='/Passport.jpg' alt="Profile" className="profile-pic" />
            <h1>Hello, I'm Chukwuma Emordi</h1>
            <p>I am a software engineer with 2 years of experience, skilled in AI and software development.</p>
            <div className="buttons">
                <a href="/IT CV.pdf" target='_blank' className="btn btn-primary">
                    Download My CV
                </a>
                
            </div>
        </div>
    </section>
);

export default Hero;
