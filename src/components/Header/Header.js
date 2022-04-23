import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className='div-header'>
            <section className='section'>
                <div className='header-container'>
                    <div className='contain'>
                    <div className='left-div'>
                        <h2 className='tell-story'>TELL US YOUR STORY</h2>
                    </div>

                    <div className='right-div'>
                        <div>
                    <a href="https://open.spotify.com/album/4p01Gc10JfNURoCXVnr3wH">
							<img src="https://rondesantis.com/wp-content/uploads/2021/10/Florida-Story-1.png" class="image" alt=""  />
                            	</a>
                                </div>
                                <div>
                    <button className='order-now'>
                        RECORD NOW
                    </button>
                    </div>
                    </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Header
