import { useEffect, useState } from 'react';
import '../css/Home.css'
import '../css/bootsrap.css'
import uuid from 'uuid/v1' 
import NavigationBar from '../components/NavigationBar';
import { json } from 'react-router-dom';

const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState('')
    const [Eerr, setEerr] = useState('');
    const [perr, setPerr] = useState('');
    const [close, setClose] = useState(false)


    
   
    
    
     const HandleLogin =async (e)=>{
        e.preventDefault()
        
        
        try {
          const res = await fetch('/login',{
              method:"POST",
              body:JSON.stringify({email,password}),
              headers:{'content-Type':'application/json'}
          })

          if(res.ok){
            
          }
        }catch(err){
          console.log(err);
        }
    }


    return ( 
        <div className="signup position" > 
        
        <div className='d-flex py-5 justify-content-center w-100 text-white '>
        <form className='w-50 ' onSubmit={HandleLogin}>
        <h3 className='text-center'>Login</h3>
        
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            style={{height:'48px'}}
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
                <label className='text-danger'>{Eerr}</label>

        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            style={{height:'48px'}}
          />

            <label className='text-danger'>{perr}</label>

        </div>
        <div className="d-grid text-center">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          don't have an account registered? <a href="/signup">sign up?</a>
        </p>
      </form>

        </div>  
           {close &&
             <div className='position-fixed d-flex text-center justify-content-center ' style={{ top:'0',width:'100%',height:'100vh',alignItems:'center',zIndex:'1000',backgroundColor:'rgba(0,0,0,0.5)'}}>
             <div className='bg-white w-50 h-50 d-flex justify-content-center ' style={{alignItems:'center'}}>
                 <div className="">
                 <div>
                         <h3>email or password is incorrect</h3>
                     </div>
                     <button className="btn btn-lg btn-primary" onClick={()=>{setClose(false)}}>Close</button>
                 </div>
                 </div>
             </div>
           }
        </div>
        
        );
}
 
export default Login;