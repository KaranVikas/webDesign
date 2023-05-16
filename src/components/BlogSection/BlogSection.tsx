import React from 'react'
import BlueButton from '../BlueButton/BlueButton'
import CardComp from '../CardComp/CardComp'
import Card1 from '../../images/smallcard1.png'
import Card2 from '../../images/smallcard2.png'
import Card3 from '../../images/smallcard3.png'

const BlogSection = () => {
  return (
    <section>
    <div style={{marginBottom:"112px"}}>

      <div className='row text-start'>
          <h2 className='worktitle '>Blog & Resources</h2>
          <div className='workStyle col'>
          <h4 className="desc mt-2 " style={{textAlign:'left'}}>I love to write whenever i can. Here is some of my 
          blog and resources for the designers and developers.</h4>
          </div>
          <div className='col'></div>
          
      
      </div>  
      <div className='row mt-3'>
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

export default BlogSection