import React from 'react'
import { ExpoComp } from '../Expocomp/ExpoComp'
import BlueSection from '../BlueSection/BlueSEction'

const KindSection = () => {
  return (
  <>
    <section>
        <div className='row'>
            <h2 className='worktitle' style={{textAlign:"center"}}>Kind Words</h2>
            <h4 className="hero-section__text mt-2 pt-0" style={{}}>See what my clients have to say about working with me</h4>
          <div className='row mt-4'>
            <div className='col-12 col-md '>
              <div className='row kindLeftBorder mb-4'>
                <h4 className="hero-section__text mt-2 pt-0 ps-0" style={{textAlign:'left'}}>"His quality of work is excellent! I prefer Mehedi in every important work of design. He is working fast, clean and present great usability results."   </h4>
                <h4 className='nameTitle'>Harald Pfeifer</h4>
              </div>
              <div className='row kindLeftBorder'>
                <h4 className="hero-section__text mt-2 pt-0" style={{textAlign:'left'}}>I couldn't ask for a better Designer. Communication was 200% and this went above my expectations. </h4>
                <h4></h4>
                <h4 className="hero-section__text mt-2 pt-0" style={{textAlign:'left'}}>
                He threw in some additional perks for me. I will definitely be working with him for future projects. Happy and very satisfied customer</h4>
                <h4 className='nameTitle'>Valenthino</h4>
              </div>
            </div>

            <div className='col-12 d-flex flex-column justify-content-between col-md kindBorder ms-0 ms-md-4 mt-4 mt-md-0 mb-4 mb-md-0' style={{}}>
              <div>
                <h4 className="hero-section__text mt-2 pt-0" style={{textAlign:'left'}}>Mehedi has worked with us on many projects and has always come through. Mehedi is professional with an eye for detail and makes his deadlines.   </h4>
                <h4></h4>
                <h4 className="hero-section__text mt-2 pt-0" style={{textAlign:'left'}}>
                His work is always outstanding and uses a lot of his own creativity and understands us and our projects with simple direction.
                </h4>
                <h4></h4>
                <h4 className="hero-section__text mt-2 pt-0 " style={{textAlign:'left'}}>
                He is easy to work with an responds quickly to any request we have ever had.
                </h4>
              </div>
              <div className='nameTitle d-flex align-self-start'>Geoff Crutcher</div>
            </div>
          </div>
          <div>
            <BlueSection />
          </div>
        </div>
    </section>
  </>
  )
}

export default KindSection