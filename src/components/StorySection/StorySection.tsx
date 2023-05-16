import React from 'react'
import person from '../../images/person.png'
import { DownArrow } from '../../svg'

const StorySection = () => {
  return (
    <section>
        <div className='row justify-content-between' style={{marginBottom:"116px"}}>
            <div className='col-12 col-md-4 text-center'>
              <img className='text-center' style={{width:"50%"}}src={person} alt="person image" />
              <h2 className='nameFont text-center'>Mehedi Hasan</h2>
              <h4 className="hero-section__text mt-2 ">UX UI Designer, Mentor and
Content Creator at Youtube @Mehedihas</h4>
              <button className='smallBtn mt-3 mx-auto d-none d-md-block'><DownArrow/><span className='ms-1'>Let's Talk</span></button>
            </div>
            <div className='col-12 col-md-6'>
                <h2 className='worktitle d-none d-md-block'>My Long</h2>
                <h2 className='worktitle d-none d-md-block'>Story Short</h2>
                 <h4 className="hero-section__text mt-2 text-center text-md-start" >Growing up in a small village without access to the internet or the latest technology sparked my curiosity for computers. I began learning Photoshop in a photo studio where I paid for.
                    <h4 className='hero-section__text text-center text-md-start mt-3'>
                      My love for gaming led me to play FPS video games like PUBG and Valorant, which taught me valuable skills in making critical decisions under pressure. When I'm not gaming, I enjoy unwinding with Netflix.
                    </h4>
                    <h4 className='hero-section__text text-center text-md-start mt-3'>
                  As a former cricket team captain, I gained valuable teamwork and empathy skills that have helped me contribute positively to any situation. 
                      
                    </h4>
                    <h4 className='hero-section__text text-center text-md-start mt-3'>
                  Now, I'm passionate about helping others, and I'm working to build a Designer Community to assist new designers in their journey to success.</h4>

                    </h4>



                  <button className='smallBtn mt-3 mx-auto d-block d-md-none'><DownArrow/><span className='ms-1'>Let's Talk</span></button>
            </div>
        </div>
    </section>
  )
}

export default StorySection