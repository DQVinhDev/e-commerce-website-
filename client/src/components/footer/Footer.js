import React, {useContext, useState} from 'react'
import {globalState} from '../../globalState'
import Facebook from '../headers/icon/facebook-brands.svg'
import Git from '../headers/icon/github-brands.svg'
import Logo from '../headers/icon/vimeo-v-brands.svg'
import {Link} from 'react-router-dom'





function Footer() {
    const state = useContext(globalState)
    


    
    return (
    <>
        <footer className='footer-main'>
            <div className='module-footer'>
                <div className='footer-catergory'>
                    <a target="_blank" className="footer-catergory-a" href="https://www.facebook.com/vin0405/">
                    <img src={Facebook} alt="" width="30"/> 
                    </a>
                    
                </div>
                <div className='footer-catergory'>
                    <a className="footer-catergory-a" target="_blank" href="https://github.com/vinhkute24">
                    <img src={Git} alt="" width="30"/> 
                    </a>
                </div>
                
            </div>
            <div className='footer-content'>
                <p>
			The content of this site is copyright-protected and is the property of Quang Vinh Shop. 
            Quang Vinh Shop's business concept is to offer fashion and quality at the best price</p>
            </div>

            <div className="logo-footer">
                <h1>
                    
                    <Link to="/"><img src={Logo} alt="" width="65"/></Link>
                    Quang Vinh Shop
                </h1>

            </div>
          
        </footer>
    </>
        


    )
}

export default Footer