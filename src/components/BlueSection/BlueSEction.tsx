import React from 'react'
import { Line, Line2, Line3 } from '../../svg'

const BlueSection = () => {
  return (
    <div className='blueBox mt-3'>
        <div className='mt-0 mt-md-2 d-flex flex-column flex-md-row justify-content-around'>
                    <div className=' '>
                        <h2 className='worktitle mb-0' style={{textAlign:"center"}}>5</h2>
                        <h3 className='smallFont'>Years Of Experience</h3>
                    </div>
                    <div className='d-none d-md-block'>
                    <Line2/>
                    </div>
                    <div className='d-md-none d-block align-self-center' >
                    <Line3/>
                    </div>
                    
                    <div className=' '>
                        <h2 className='worktitle mb-0' style={{textAlign:"center"}}>300+</h2>
                        <h3 className='smallFont'>Freelance Projects</h3>
                    </div>
                    <div className='d-none d-md-block'>
                    <Line2/>
                    </div>
                    <div className='d-md-none d-block align-self-center'>
                    <Line3/>
                    </div>
                    <div className=''>
                        <h2 className='worktitle mb-0' style={{textAlign:"center"}}>100%</h2>
                        <h3 className='smallFont'>Customer Satisfaction</h3>
                    </div>
             </div>       
    </div>
  )
}

export default BlueSection