import {CustonButton} from '../HeroComponent/CustonButton.jsx'
import pricing from './pricing.module.css'

export const PricingCard = (props) => {
    return(
        <div className={pricing.Card}>
           <div className={pricing.cardCont}>
                {props.free && <span className={pricing.free}> {props.free} month free</span>}
                <br />
                <span className={pricing.onetime}>One-time plans available</span>
                <h1 className={pricing.planName}>{props.planname}</h1>
                <p>{props.price}/month after offer period</p>
                <p>{props.numberAccount} account</p>
           </div>

           <div className={pricing.content}>
                <ul>
                    {
                        props.features && props.features.map((feature) =>  <li>
                        <p>{feature}</p></li> )
                    }
                   
                </ul>
                
                {/* <CustonButton type='primary' text='VIEW PLANS' onClick={() => {}}/> */}
                <div>
                    <CustonButton type='secondary' onClick={() => {}}>
                        VIEW PLANS
                    </CustonButton>
                </div>
           </div>

           <div className={pricing.termFoot}>
                <a href="#">Terms and conditions apply.</a>
                 1 month free not available for users who have already tried
            </div>
        </div>

    )
}