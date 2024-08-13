import React from 'react';
import './Projects.css';

const Projects = () => (
    <section id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
            <div className="project-item">
                <h3>africaLand</h3>
                <video controls>
                    <source src="/project-a.mp4" controls type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p>Our Online-Africa_Land-Gallery aims to create a visually appealing and user-friendly platform to effectively
promote and help buyers know the availability of lands in Nigeria.</p>
            </div>
            <div className="project-item">
                <h3>Store Record</h3>
                <video controls>
                    <source src="/project-b.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p> Storerecord helps sellers advertise their products to buyers..</p>
            </div>
             <div className="project-item">
                <h3>My Blog</h3>
                <video controls>
                    <source src="/project-b.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p> With Myblog, you can share your experience, pictures, and videos any where and anytime.</p>
            </div>
             <div className="project-item">
                <h3>AirBNB console</h3>
                <video controls>
                    <source src="/project-b.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p> This team project is part of the ALX Full-Stack Software Engineering program. It's the first step towards building a
first full web application: an AirBnB clone. This first step consists of a custom command-line interface for data
management, and the base classes for the storage of this data.</p>
            </div>
        </div>
    </section>
);

export default Projects;
