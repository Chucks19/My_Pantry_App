import React from "react";
import Navbar from "./aa/Navbar";
import "./App.css"
import Hero from "./aa/Hero";
import Card from "./aa/Card";



export default App(){
       return(
              <div>
                         <Hero />
      <Card 
        img1 = 'list2.jpg'
        img2 = 'list1.jpg'
        rating = {5.0}
        review = {6}
        country = "USA"
        price= {130} />
    <Card 
      img1 = '/Hero.jpg'
      img2 = 'list1.jpg'
      rating = {5.0}
      review = {20}
      country = "USA"
      price = {120}
        />
    <Card 
      img1 = 'all.jpg'
      img2 = 'list1.jpg'
      rating = {4.0}
      review = {61}
      country = "USA"
      price = {112}
      />
              </div>
       )
}