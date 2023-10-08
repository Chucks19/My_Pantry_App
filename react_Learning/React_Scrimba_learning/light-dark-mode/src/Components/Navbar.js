import React from 'react';

function Navbar(props) {

  
  return (
    <nav className= {props.darkmode? "dark": ""}>
      
        <img src= "./logo512.png" className="React-logo" alt="logo" />
        <h3 className = "Logo-text"> ReactFacts </h3>
        <div className = "toggler">
          <p className = "lighttext"> Light </p>
          <div className = "toggler-slider" onClick={props.toggle}>
              <div className = "slider--circle"></div>
          </div>
          <p className = "darktext"> Dark </p>
        </div>
      </nav>
  );
}

export default Navbar; 