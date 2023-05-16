import React from 'react'
import {datalist} from './utlity'
export const ExpoComp = () => {
  return (

    <div className='row blueBox mt-4 '>
        {
            datalist.map((item,id)=>{
                return(
                    <div key={id} className='col '>
                        <h2 className='worktitle mb-0' style={{textAlign:"center"}}>{item.title}</h2>
                        <h3 className='smallFont'>{item.description}</h3>
                    </div>
                )
            })
        }
    </div>
  )
}

