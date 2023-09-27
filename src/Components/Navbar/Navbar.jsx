import React, { useState } from 'react';
import './navbar.css'
import { SiYourtraveldottv } from 'react-icons/si'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { PiDotsNineBold } from 'react-icons/pi'

const Navbar = () => {
    const [active, setActive] = useState('navBar')

    const showNav = () => {
        setActive('navBar activeNavbar')
    }

    const removeNavbar = () => {
        setActive('navBar')
    }
    
    
    return (
        <section className='navBarSection'>
            <header className="header flex">
                <div className="logoDiv">
                    <a href="" className="logo">
                        <h1><SiYourtraveldottv className="icon" /> Travel.</h1>



                    </a>
                </div>

                <div className='active'>
                    <ul className="navlists flex">
                        <li className="navitem">
                            <a href="#" className="navlink"> Home </a>
                        </li>
                        <li className="navitem">
                            <a href="#" className="navlink">Packages </a>
                        </li>
                        <li className="navitem">
                            <a href="#" className="navlink"> Shop </a>
                        </li>
                        <li className="navitem">
                            <a href="#" className="navlink">About  </a>
                        </li>
                        <li className="navitem">
                            <a href="#" className="navlink"> News </a>
                        </li>
                        <li className="navitem">
                            <a href="#" className="navlink"> Contacts </a>
                        </li>
                        <button className='btn'>
                            <a href="#">Book Now</a>

                        </button>
                    </ul>

                    <div onClick={removeNavbar}  className="closeNavbar">
                        <AiOutlineCloseCircle className="icon" />
                    </div>


                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <PiDotsNineBold className="icon" />
                </div>
            </header>
        </section>
    )
}

export default Navbar