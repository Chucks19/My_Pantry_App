import React from 'react';

function Main(props) {

  
  return (
    <main className= {props.darkmode? "dark": ""}>
      
        <h1 className="title">Fun Facts About React</h1>
        <ul className='facts'>
              <li> Was first released in 2013</li>
              <li> Was originally created by jordan Walker</li>
              <li> Has over 100k stars on Github</li>
              <li> Is maintained by Facebook</li>
              <li> Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
  );
}

export default Main; 