import {CustonButton} from '../../HeroComponent/CustonButton'
import { FaFacebook, FaApple, } from "react-icons/fa";
import styles from './styles.module.css'
import { ReactComponent as GoogleIcon} from '../../../assests/Icons/google.svg'

export const ButtonLinks = () => {
    return (
        <div className={styles.ButtonLinks}>
            <CustonButton type='logsecondary'>
                <FaFacebook size={'1rem'} /> &nbsp; CONTINUE WITH FACEBOOK
            </CustonButton>
            <CustonButton type='logprimary'>
                <FaApple size={'1rem'} /> &nbsp; CONTINUE WITH APPLE
            </CustonButton>
            <CustonButton type='logoutline'>
                <GoogleIcon className={styles.google}  /> &nbsp; CONTINUE WITH GOOGLE
            </CustonButton>

        </div>
    )
}