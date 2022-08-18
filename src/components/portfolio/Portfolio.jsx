import React from 'react'
import './Portfolio.css'
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.jpeg'
import img4 from '../../assets/4.jpeg'
function Portfolio() {
  return (
   <section id='portfolio'> 
   <h5>My Recent Work</h5>
   <h2>Portfolio</h2>
   <div className="container portfolio__container">
        <article className="portfolio-item">
            <div className="portfolio_item-image">
                <img src={img1} alt="" />
            </div>
            <h3>SLIIT First React Project</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com/Health-Care-Channeling/Health-Care-Channeling " target="_blank" className='btn'>Github</a>
            
           </div>
        </article>
        <article className="portfolio-item">
            <div className="portfolio_item-image">
                <img src={img2} alt="" />
            </div>
            <h3>Thaulla Bojun</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com/SLIIT-IT-Project-2021/Thaulla-Bojun " target="_blank" className='btn'>Github</a>
            
           </div>
        </article>
        <article className="portfolio-item">
            <div className="portfolio_item-image">
                <img src={img3} alt="" />
            </div>
            <h3>Binance UI Design</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com/DilshanRathnayaka/Binance-Ui-Design" target="_blank" className='btn'>Github</a>
            
           </div>
        </article>
        <article className="portfolio-item">
            <div className="portfolio_item-image">
                <img src={img4} alt="" />
            </div>
            <h3>Lounch Site HTML</h3>
           <div className="portfolio__item-cta">
           <a href="https://github.com/DilshanRathnayaka/Lounch-site" target="_blank" className='btn'>Github</a>
            
           </div>
        </article>
        


   </div>
   </section>
  )
}

export default Portfolio
