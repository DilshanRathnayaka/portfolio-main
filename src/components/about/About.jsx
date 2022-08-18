import React from 'react'
import './About.css'
import {MdCastForEducation} from 'react-icons/md'



function about() {
  return (
    <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__content">
            <div className="about__cards">
                <article className='about__card'>
                    <MdCastForEducation className='about__icon'/>
                    <h5>Education</h5>
                    <small>Sri Lanka Institute of Information Technology <br /></small>
                     <small>2020 - 2024 </small>
                </article>
                <article className='about__card'>
                    <MdCastForEducation className='about__icon'/>
                    <h5>Education</h5>
                    <small>Kekirawa Central College - Advanced Level <br /> Economics - C <br /> Business studies - B  <br /> Accounting - C</small>
                </article>
                <article className='about__card'>
                    <MdCastForEducation className='about__icon'/>
                    <h5>Education</h5>
                    <small>Ordinary Level <br />2A Pass <br />4B pass <br /> 3C pass</small>
                </article>
               

            </div>
<p>
  I'm 3rd year Undergraduate student in sri lanka institute of information technology(SLIIT).I'm studying BSc.(Hons) in information technology.i'm interested in web application development.
</p>
<a href="#contact" className='btn btn-primary'>Let's Talk</a>
</div>
        </div>
    </section>
  )
}

export default about