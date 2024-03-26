import { DiscountFlag } from './DiscountFag'
import {PricingCard} from './PricingCard'
import {paymentMethods, pricingCardItems} from './PricingData'
import pricing from './pricing.module.css'


export const PremiumPrice = () => {

    const renderPaymentMethod = (method) => {
        if (method.icon) return <img src={method.icon} alt="representing the payment method" />;

        // if(method.icon) return <img src={method.icon} />
        return null
    }
    return (
        <section className={pricing.section}>
            <h1 className={pricing.title}>Pick your Premium</h1>
            <p className={pricing.description}>Listen without limits on your phone, speaker, and other devices.</p>
            <div className={pricing.flex}>
                {
                    paymentMethods.map(renderPaymentMethod)

                }
            </div>
            <br />
            <br />

            <div className={pricing.flex}>
                    {
                        pricingCardItems.map((plans) => {
                            return <PricingCard {...plans}/>
                        })
                    }
            </div>
            <br />
            <br />
            <DiscountFlag/>

        </section>
    )
}