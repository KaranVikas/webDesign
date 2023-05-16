import * as React from "react"
import { Link } from "gatsby"
import { Line, MainLogo, MessageIcon } from "../svg"
import styled from 'styled-components'


const Header = ({ siteTitle }) => (
  <header
    style={{
      // margin: `0 auto`,
      // padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Head >
    
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{color:"white"}}>
  <div className="container-fluid" style={{color:"white",padding:"0px"}}>
    <A className="navbar-brand" href="#" style={{color:"white",margin:"0px"}}><MainLogo/></A>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{color:"white",width:"100%"}}>
      <div className="navbar-nav" style={{color:"white",width:"100%",justifyContent:"center",alignItems:"center"}} >
        <A className="nav-link " aria-current="page" href="#">Home</A>
        <Line/>
        <A className="nav-link" href="#">My work</A>
        <Line/>
        <A className="nav-link" href="#">Resources</A>
        <Line/>
        <A className="nav-link ">About</A>
        <Line/>
        <A className="nav-link ">101Workshop</A>
        
        
      </div>
    </div>
    <div className="d-none d-lg-block collapse navbar-collapse" id="navbarNavAltMarkup" style={{color:"white",}}>
      <div className="navbar-nav" style={{color:"white",width:"180px",alignItems:"center"}} >
        <Button>
          <MessageIcon/> 
        </Button>
        <h5>Let's Play</h5>
      </div>
    </div>

    
  </div>
</nav>
</Head>
    
    
  </header>
)

export default Header

const Head = styled.div`
width:100%;
color:white;
font-family: 'Space Grotesk';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #F0EDFD;
`

const A = styled.a`
color:white;
margin-left: 24px ;
margin-right: 24px;
`

const Button = styled.button`
border: none;
background: transparent;
`