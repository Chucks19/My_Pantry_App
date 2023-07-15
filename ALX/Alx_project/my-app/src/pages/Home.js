import { useEffect } from 'react';
import HomeBody from '../components/HomeBody';
import '../css/Home.css'
import './main.css'

const Home = () => {

  useEffect(()=>{
      const res =async ()=>{
      const data =  await  fetch ('http://localhost:8000/users')

      const json = await data.json()
      console.log(json);

      }
      res()

  },[])
    return ( 
        <div>
           
            <HomeBody/>
        </div>
     );
}
 
export default Home;