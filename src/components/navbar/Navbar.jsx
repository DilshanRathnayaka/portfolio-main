import React from 'react'
import './Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {IoIosContact} from 'react-icons/io'
import {BiBookBookmark} from 'react-icons/bi'
import {MdMiscellaneousServices} from 'react-icons/md'
import {BiMessageSquareDots} from 'react-icons/bi'
import {GrProjects} from 'react-icons/gr'
import { useState } from 'react'


const Navbar=()=> {
    const [activeNav, setactiveNav] = useState('#')
  return (
    <nav>
        <a href="#" onClick={()=> setactiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
        <a href="#about" onClick={()=> setactiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><IoIosContact/></a>
       
        <a href="#experiance" onClick={()=> setactiveNav('#experiance')} className={activeNav === '#experiance' ? 'active' : ''}><BiBookBookmark/></a>
        <a href="#services" onClick={()=> setactiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdMiscellaneousServices/></a>
        <a href="#portfolio" onClick={()=> setactiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GrProjects/></a>
        <a href="#contact" onClick={()=> setactiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDots/></a>


    </nav>
  )
}

export default Navbar