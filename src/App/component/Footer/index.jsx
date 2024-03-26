import styles from './styles.module.css'
import { FaFacebookF, FaInstagram, FaTwitter, FaGlobeAfrica  } from "react-icons/fa";
import {Logo} from '../Logo/Logo.jsx'
import {aboutMenu, comunitiesMenu, usefulLinkMenu, legalUrls  } from './data.jsx'


export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.menu}>
                <div className={styles.menuItem}>
                    <Logo whiteLogo={true}/>
                    <div className={styles.flex}>
                        <Menu title='' options={aboutMenu}/>
                        <Menu title='COMMUNITES' options={comunitiesMenu}/>
                        <Menu title='USEFUL LINKS' options={usefulLinkMenu}/>
                    </div>

                </div>

                <div className={styles.legalUrls}>
                    {
                        legalUrls.map(({url , name})=> <a href={url}>{name}</a> )
                    }
                    
                </div>
            </div>
            <div className={styles.copyright}>
                <div className={styles.social}>
                    <FaInstagram />
                    <FaTwitter />
                    <FaFacebookF />
                    
                </div>
                <div>
                    <p> <FaGlobeAfrica />  India (English)</p>
                    <p>© 2023 Spotify AB</p>
                </div>
            </div>
        </footer>
    )
}

export const Menu = ({title, options}) => {
    return (
        <nav className={styles.nav}>
            <h5>{title || <>&nbsp;</>} </h5>
            <ul>
                {
                    options && options.map((option) => {
                        return (<li><a href={option.url}>{option.name}</a></li>)
                    })
                }
           
            </ul>
        </nav>
    )
}