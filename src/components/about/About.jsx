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
                     <small>2020 - Present </small>
                </article>
                <article className='about__card'>
                    <MdCastForEducation className='about__icon'/>
                    <h5>Working Experiance
                    </h5>
                    <small>1+ Year Internship At Epic Lanka <br/> Spring Boot <br/> Angular</small>
                </article>
                {/* <article className='about__card'>
                    <MdCastForEducation className='about__icon'/>
                    <h5>Education</h5>
                    <small>Ordinary Level <br />2A Pass <br />4B pass <br /> 3C pass</small>
                </article> */}
               

            </div>
<p>
Organized and self-motivated software engineering undergraduate with 1+ years of professional experience
 in frontend and backend development. Proficient in Spring Boot, Angular, and JavaScript, SQL programming
 languages. Possess practical working knowledge of developing scalable applications, debugging, and
 collaborating in Agile environments. Known for strong problem-solving and collaborative skills, constantly
 enhancing technical expertise through hands-on projects and continuous learning. Reliable and adaptable
 team player dedicated to delivering innovative software solutions
</p>
<a href="#contact" className='btn btn-primary'>Let's Talk</a>
</div>
        </div>
    </section>
  )
}

export default about