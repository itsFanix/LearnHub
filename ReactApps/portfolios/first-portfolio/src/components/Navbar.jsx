import React from 'react'  

import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
//import { FaSquareXTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'


//rafce to generate reactArrow function
//import Logo

const Navbar = () => {
  return (
   <nav className  = " mb-20 flex item-center justify-between py-6">

    <div className='flex flex-shrink-0 items-center'>
        <img className = "mx-2 w-10" src ="" alt =""></img>

    </div>
        <div  className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin />
            <FaGithub />
            <FaTwitterSquare/>
            <FaInstagram />
        </div>
   </nav>
  )
}

export default Navbar
