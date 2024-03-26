import './LandingPageHeader.css'
import React from "react"
import {Logo} from '../Logo/Logo'
import {HeaderNavigation} from './HeaderNavigation'
import {ReactComponent as MenuIcon } from '../../assests/Icons/menu.svg'


export const LandingPageHeader = () => {
    const [showMenu, setMenu] = React.useState("false")
    const toggleMenu = () => {
        setMenu(showMenu === false)
    }
    
    return(
        <header className="header">
            <div className="logo">
              <Logo whiteLogo={true}/>
            </div>
            <MenuIcon className='menu-icon' onClick={toggleMenu} fill='white'/>
            <div className='menu'>
                <HeaderNavigation className={showMenu ? 'mobile' : ''}/>
            </div>
        
        </header>
    );
}

