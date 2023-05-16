import React from 'react'
import { PlayIcon } from '../../svg';
import background from "../images/homeHero.png"
import './HeroSection.css'
import '../../styles/global.css'


const HeroSection = () => {
  return (
    <div className='container'>
      <img src={background} style={{position:"absolute",height:"100%",width:"100%",left:0,top:0,zIndex:-1}}></img>
        <h2 className='hero-section__heading'>Crafting Memorable User Experiences for Business Success</h2>
        <p className="hero-section__text mx-auto" style={{textAlign:"center"}}>I blend exquisite design with impeccable functionality for an exceptional user experience, while keeping users captivated.</p>
        <div className='text-center'>
          <PlayIcon/> 
        </div>
       
    </div>
  )
}

export default HeroSection




