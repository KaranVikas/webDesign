import React from 'react'
import { CaseStudy, Project, Visual } from '../../svg'
import CardComp from '../CardComp/CardComp'
import Card1 from '../../images/card1.png'
import Card2 from '../../images/card2.png'
import Card3 from '../../images/card3.png'
import BlueButton from '../BlueButton/BlueButton'

const index = () => {
  return (
  <section>
    <div style={{marginBottom:"112px"}}>

      <div className='row '>
          <h2 className='worktitle text-md-start text-center'>My Work</h2>
          <div className='workStyle col'>
          <h4 className="hero-section__text mt-2 " style={{textAlign:'left'}}>Here are some of my design works that showcase my design skills and expertise. Click on each project to see</h4>
          </div>
          <div className="col justify-content-between d-flex align-items-end justify-md-content-end mt-4 mt-md-0">
            <span className='ms-3 '><Visual/></span>
            <span className='ms-3 '><CaseStudy/></span>
            <span className='ms-3 '><Project/></span>
          </div>
      
      </div>  
      <div className='row mt-3 text-center text-md-start'>
        <CardComp text={Card1} />
        <CardComp text={Card2} />
        <CardComp text={Card3} />
      </div>
      <div className='text-center'>
        <BlueButton/>
      </div>
       
    </div>
  </section>
  )
}

export default index
