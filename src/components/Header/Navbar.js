import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar-container'>
        <section className='navbar-section'>
            <div className='container'>
                <div className='left-container'>
                    <a href='/'>
                        <img src='https://rondesantis.com/wp-content/uploads/2021/10/white-logo-01.png'/>
                    </a>
                </div>

                <div className='center-container'>
                    <nav className='navigation'>
                        <ul className='nav-content'>
                            <li className='nav-links'>
                                ABOUT
                            </li>
                            <li className='nav-links'>
                                SHOP
                            </li>
                            <li className='nav-links'>
                                CONTACT
                            </li>
                            <li className='nav-links'>
                                VOLUNTEER
                            </li>
                            <li className='nav-links'>
                                ESPANOL
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>


    </div>
  )
 

}

export default Navbar