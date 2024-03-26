import { CustonButton } from "../HeroComponent/CustonButton"
import pricing from './pricing.module.css'

export const DiscountFlag = () => {
    return (
        <div className={pricing.discount}>
            <p>Special discount for eligible students in university</p>
            <CustonButton type='outlinetwo'  > LEARN MORE</CustonButton>

        </div>
    )
}