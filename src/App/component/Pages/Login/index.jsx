import styles from './styles.module.css'
import { Header } from './Header'
import {ButtonLinks} from './ButtonLinks'
import {CustonButton} from '../../HeroComponent/CustonButton'
import { CustomInput } from './Input'
export const Login = () => {
    return (
        <section>
            <Header/>
            <main className={styles.inputArea}>
                <ButtonLinks/>
               <div className={styles.line}>
                    <span> OR </span>
               </div>
               <CustomInput type="email" placeholder={'Email address or username'} text={'Email address or username'}/>
               <CustomInput type="password" placeholder={'Password'} text={'Password'}/>
               <a className={styles.forPassword} href="fortPassword">Forgot your password?</a>
                <div className={styles.flex}>
                    <div className={styles.logFlex} >
                        <input type="checkbox"/>
                        <label>Remember me</label>
                    </div>
                    <CustonButton type='loginprimary' >
                        Login
                    </CustonButton>
                </div>
               <div className={styles.line}></div>
               <br />
               <p>Don't have an account?</p>
               <CustonButton type='logoutline'>
                    SIGN UP FOR SPOTIFY
                </CustonButton>
                
            </main>

        </section>
    )
        
    
}