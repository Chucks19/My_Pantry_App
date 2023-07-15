import { useState } from 'react';
import '../css/Home.css'
import '../css/bootsrap.css'
import uuid from 'uuid/v1' 
import NavigationBar from '../components/NavigationBar';
import { json } from 'react-router-dom';

const SignUp = () => {
    const [firstname, setfName] = useState('');
    const [lastname, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ferr, setFerr] = useState('');
    const [lerr, setLerr] = useState('');
    const [Eerr, setEerr] = useState('');
    const [perr, setPerr] = useState('');
    const [isloading,setIloading] = useState(false)


     const SignUpSubmit =async (e)=>{
        e.preventDefault()
       
        try {
          const res = await fetch('/signup',{
              method:"POST",
              body:JSON.stringify({firstname,lastname,email,password}),
              headers:{'content-Type':'application/json'}
          })

      const data =await res.json();
      if(res.ok){
        console.log(data)
        const expirationDate = new Date();
     expirationDate.setDate(expirationDate.getDate() + 30);
        document.cookie = `user=${data.user}; expires=${expirationDate}; path=/`;
        setIloading(true)
 
        setTimeout(() => {
         document.location='/'
         setIloading(false)
         }, 1000);
      }

        }catch (error) {
          console.log(error);   
        }
    }

    


    return ( 
        <div className="signup d-flex py-5 justify-content-center w-100 text-white" > 
        
      <form className='w-50 ' onSubmit={SignUpSubmit}>
        <h3 className='text-center'>Sign Up </h3>
        <div className="mb-3">
          <label >First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            value={firstname}
            onChange={(e)=>{setfName(e.target.value)}}
            style={{height:'48px'}}
          />
          <label className='text-danger'>{ferr}</label>
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" value={lastname}
            onChange={(e)=>{setLName(e.target.value)}}
            style={{height:'48px'}}/>
            <label className='text-danger'>{lerr}</label>
        </div>
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
          Already registered <a href="/login" className='text-white'>sign in?</a>
        </p>
      </form>
      {
              isloading 
              &&
                <div className="d-flex  align-items-center justify-content-center position-fixed top-0" style={{height:"100vh",backgroundColor:"rgba(0,0,0,0.7)",width:"100%",top:'0',position:'absolute'}}>
                
              <img src="./images/loading.gif" alt="" />
            
           </div>
          }
        </div>
     );
}
 
export default SignUp;