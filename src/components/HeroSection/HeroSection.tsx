import React from 'react'
import { PlayIcon } from '../../svg';
import background from "../images/homeHero.png"
import './HeroSection.css'
import '../../styles/global.css'


const HeroSection = () => {
  return (
    <div className='container'>
      <img src={background} style={{position:"absolute",height:"100%",width:"100%",left:0,top:0,zIndex:-1}}></img>
        <h2 className='title'>Crafting Memorable User Experiences for Business Success</h2>
        <h3 className="desc">I blend exquisite design with impeccable functionality for an exceptional user experience, while keeping users captivated.</h3>
        <PlayIcon/>
       
    </div>
  )
}

export default HeroSection




