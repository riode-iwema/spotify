import {CustonButton} from './CustonButton'
import style from './PremiumOffer.module.css'


export const PremiumOffer = () => {
    return(
        <div className={style.premium}>
            <h1 className={style.title}>Get Premium free for 1 month </h1>
            <p className={style.description}>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</p>
            <div className={style.btngroup}>
                {/* <button className={style.Btn}>GET MORE PLAN</button> */}
                {/* <CustonButton type='primary' text='GET STARTED'/> */}
                <CustonButton type='primary'>
                    GET STARTED
                </CustonButton>
                <CustonButton type='outline'>
                    SEE OTHER PLANS
                </CustonButton>
                {/* <CustonButton type='outline' text='SEE OTHER PLANS'/> */}
                {/* <button className={style.transparentbtn}>GET MORE PLAN</button> */}
            </div>
            
            <div className={style.term}>
                <a  href="#/PremiumOffer">Terms and conditions apply.</a>1 month free not avaliable for users who have tried premium.
            </div>

        </div>
    )
}