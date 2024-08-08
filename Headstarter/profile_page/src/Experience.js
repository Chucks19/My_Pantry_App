import React from 'react';
import './Experience.css';

const Experience = () => (
    <section id="experience">
        <h2>Experience</h2>
        <div className="timeline">
            <div className="timeline-item">
                <h3>Software Engineer Fellow at \Headstarter</h3>
                <p>2024 - Present</p>
                <ul>
                    <li>Collaborated with other developers to integrate multiple systems through APIs.</li>
                    <li>Maintained databases by writing complex SQL queries and stored procedures.</li>
                    <li>Developed code and design for software components in adherence with system requirements.</li>
                    <li>Collaborated with designers and product managers to translate product vision into
technical roadmap and executable features.</li>
                <li>Developed and maintained web applications, collaborated with cross-functional teams, and implemented AI solutions.</li>
                </ul>         </div>
            <div className="timeline-item">
                <h3>Code Instructor at CodetheDream</h3>
                <p>2024 - Present</p>
                <ul>
                    <li>Volunteered as a coding mentor, enhancing the skills of aspiring software engineers.</li>
                    <li>Mentored and guided project teams in code reviews.</li>
                    <li>Facilitated meetings with project teams to address inquiries and provide solutions.</li>
                    <li>Helped students understand difficult concepts with hands-on learning and group projects.</li>
                    <li>Facilitated group activities and discussions.</li>
                    <li>Provided feedback to students to enhance academic growth.</li>
                    <li>Monitored student progress and adapted instruction accordingly.</li>
                    <li>Provided individual assistance to support struggling learners.</li>
                </ul>
            </div>
        </div>
    </section>
);

export default Experience;
