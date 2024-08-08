import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import Sidebar from './Sidebar';
import './App.css';

const App = () => (
    <div className="app-container">
        <Header />
        <Hero />
        <div className="main-content">
            <Sidebar />
            <div className="main-section">
                <About />
                <Experience />
                <Projects />
                <Contact />
            </div>
        </div>
        <Footer />
    </div>
);

export default App;
