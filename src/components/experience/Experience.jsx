import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experiance'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
      
        <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div><h4>HTML</h4>
                  <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div><h4>React</h4>
                  <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div><h4>Next JS</h4>
                  <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                 <div> <h4>CSS</h4>
                  <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div><h4>Bootstrap</h4>
                  <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div><h4>Angular</h4>
                  <small className='text-light'>Experienced</small></div>
              </article>
            </div>

        </div>

        
        <div className="experience__backend">
        <h3>Backend Development</h3>
            <div className="experience__content">
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div><h4>MongoDB</h4>
                  <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div><h4>Spring Boot</h4>
                  <small className='text-light'>Intermediate</small></div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div><h4>Node JS</h4>
                  <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div><h4>MySQL</h4>
                  <small className='text-light'>Experienced</small></div>
              </article>
              <article className='experience__details'>
                  <BsFillPatchCheckFill className='experience__details-icon'/>
                  <div><h4>Python</h4>
                  <small className='text-light'>Experienced</small></div>
              </article>
            
            </div>

        </div>
        
      </div>




    </section>
  )
}

export default Experience