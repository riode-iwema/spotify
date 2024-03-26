import styles from './styles.module.css'
import {Logo} from '../../Logo/Logo.jsx'

export const Header = () => {
    return (
        <div className={styles.header}>
            <Logo/>

        </div>
    )
}