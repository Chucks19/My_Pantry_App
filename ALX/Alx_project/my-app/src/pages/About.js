import '../css/bootsrap.css'


const About = () => {
    return ( 
        <div classNameName="">
           <div className="breadcrumb-wrapper h-75 bg-img bg-overlay text-white " style={{backgroundImage: " linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7) ), url('./images/pexels-photo-3855622.jpeg')",minHeight:'60vh',backgroundPosition:'center'}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center text-center">
                        <div className="col-12">
                            <div className="breadcrumb-content">
                                <h2 className="breadcrumb-title">About Creative</h2>
                                <nav style={{backgroundColor:'inherit'}}>
                                    <ol style={{backgroundColor:'rgba(0,0,0,0.01)'}} className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">About</li>
                                    </ol>
                                </nav>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
            <header className="jumbotron text-center">
    <h1 className="display-4">About Us - Land Africa</h1>
  </header>
  
  <main className="container">
    <section>
      <h2 className="section-heading">Our Vision</h2>
      <div className="section-content">
        <p>Our vision is to be the most trusted and respected real estate company in Africa, known for our commitment to excellence, innovation, and integrity. We aim to create enduring value for our clients by delivering exceptional real estate solutions tailored to their unique needs.</p>
      </div>
    </section>
    
    <section>
      <h2 className="section-heading">Our Mission</h2>
      <p>Our mission is to empower individuals, businesses, and investors by providing them with comprehensive real estate services that maximize returns and elevate their aspirations. We accomplish this through a combination of deep market insights, cutting-edge technology, and a highly skilled team of professionals who are passionate about real estate.</p>
    </section>
    
    <section>
      <h2 className="section-heading">Our Services</h2>
      <ul className="list-group">
        <li className="list-group-item">Residential Sales and Purchases</li>
        <li className="list-group-item">Commercial Real Estate</li>
        <li className="list-group-item">Property Management</li>
        <li className="list-group-item">Investment Advisory</li>
        <li className="list-group-item">Market Research and Analysis</li>
      </ul>
      <p>At Land Africa, we offer a wide range of services designed to meet the diverse needs of our clients. Whether you are looking to buy your dream home, sell your property, or explore lucrative investment opportunities, our team of experts is here to guide you every step of the way.</p>
    </section>
    
    <section>
      <h2 className="section-heading">Why Choose Land Africa?</h2>
      <ul className="list-group">
        <li className="list-group-item">Expertise</li>
        <li className="list-group-item">Integrity</li>
        <li className="list-group-item">Customized Solutions</li>
        <li className="list-group-item">Technology-Driven Approach</li>
        <li className="list-group-item">Extensive Network</li>
      </ul>
      <p>At Land Africa, we are passionate about real estate and the transformation it can bring to individuals, communities, and economies. We invite you to explore the limitless possibilities that await you in the African real estate landscape. Contact us today and let us be your trusted partner in your journey towards exceptional real estate success!</p>
    </section>
  </main>

        </div>
     );
}
 
export default About;