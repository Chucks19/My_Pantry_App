import { useEffect } from "react";
import { useState } from "react";

const Application = () => {
    const [app, setApp] = useState()

    
    useEffect(()=>{
        fetch('http://localhost:4000/')

        .then((data)=>{
            console.log(data)
        })
        
        .catch((err) =>{
            console.log(err)
        })
    })
    return ( 
    <div className="application">
        <div className="index">

        </div>
    </div> 
    );
}
 
export default Application;