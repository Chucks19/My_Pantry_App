import React from 'react';

export default function Card(props){
       return (
              <div className='List_flex'>
                     <img src= {`./images/${props.img1}`} alt="Althlete 1" className='althlete1'/> 
                     <span className='Flex_star'>
                     <img src={`./images/${props.img2}`} alt="star" className='star'/>
                     {props.rating} ({props.review})  . {props.country}
                     </span>
                     <p className='Althlete1_text'>{props.comment}</p>
                     <p className='Althlete1_text2'><strong> From {props.price}</strong> / person</p>

              </div>
               )               
       }
              