import { LandingPageHeader } from "../HeaderComponent/LandingPageHeader"
import { PremiumOffer } from "../HeroComponent/PremiumOffer"
import { Features } from "../Features/index"
import { PremiumPrice } from "../Pricing/index"
import Footer  from "../Footer/index"

export const Landing = () => {
    return (
        <>
            <LandingPageHeader/>
            <PremiumOffer/>
            <Features/>
            <PremiumPrice/>
            <Footer/>
           
            
        </>
        

    )
}