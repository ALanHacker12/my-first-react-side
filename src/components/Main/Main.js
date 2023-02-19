

import React from 'react'

import './Main.css'
import girl from './sources/ActiveElectricBuzzard-size_restricted.gif'
import song from './sources/soda_luv.mp3'
export const Main =() => {



  return( 
    <div> 
    
    
   <body> 
    <div className = 'text1'>  
    <h1 class="text">Привет! Это магазин классной одежды</h1>
    <h2 class="text">здесь ты сможешь заказать любую вещь,который ты захочешь</h2>
    <img src={girl}class="girl"/>
    <audio src={song}class="song"controls></audio>
    </div>
    
    
   <nav className = "navbar-navbar-default"> 
    <div className = "container-fluid"> 
    <div className = "audio"> 
     
    
    
    
    </div> 
    
     
     
    </div> 
   </nav> 
    
    
    
   </body> 
    
    
    </div>
    );
  }

  