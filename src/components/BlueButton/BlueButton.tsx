import React from 'react'
import { LeftArrow } from '../../svg'

const BlueButton = () => {
  return (
    <div className='bluebtnText mt-5'>
        <button className='bluebtn'>More This Way
        <span className='ms-2'><LeftArrow/></span>
        </button>
    </div>
  )
}

export default BlueButton