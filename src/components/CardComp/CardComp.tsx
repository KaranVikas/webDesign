import React from 'react'
import styled from 'styled-components'
import { ButtonArrow } from '../../svg'


const CardComp = ({text}) => {
  return (
    <Card className="col-12 col-md mb-3 mb-md-0">
        <img src={text} style={{width:"100%"}}></img>
        <div className='d-flex justify-content-between'>
            <h2 className='desc text-start mt-0'>Personal Portfolio Website Hero Design Concept</h2>
            <button><ButtonArrow/></button>
        </div>
    </Card>
  )
}

export default CardComp

const Card = styled.div`
    width: 359px;
    /* height: 420px; */
    border-radius: 12px;
`