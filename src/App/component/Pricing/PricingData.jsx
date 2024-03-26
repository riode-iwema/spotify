import UpiIcon from '../../assests/Icons/upicon.svg'
import PayTmIcon from '../../assests/Icons/paytmicon.svg'
import VisaCardIcon from '../../assests/Icons/visaicon.svg'
import MasterCardIcon from '../../assests/Icons/mastericon.svg'
import AmericanExIcon from '../../assests/Icons/amdicon.svg'
import DinnerIcon from '../../assests/Icons/opayicon.svg'

export const paymentMethods = [
    {
        icon: UpiIcon,
    },

    {
        icon: PayTmIcon,
    },

    {
        icon: VisaCardIcon,
    },

    {
        icon: MasterCardIcon,
    },

    {
        icon: AmericanExIcon,
    },

    {
        icon: DinnerIcon,
    },
]

export const pricingCardItems = [

    {
        
        planName: 'Mini',
        price: 'From ₹7/day',
        numberAccount: 1,
        features: [
            'Ad-free music listening on mobile',
            'Group Session',
            'Download 30 songs on 1 mobile device',
        ]
    },

    {
        free: 1,
        planName: 'Individual',
        price: '₹119',
        numberAccount: 1,
        features: [
            'Ad-free music listening',
            'Group Session',
            'Download 10k songs/device on 5 devices',
        ]
    },

    {
        free: 1,
        planName: 'Duo',
        price: '₹149',
        numberAccount: 2,
        features: [
            'For couples who live together',
            'Ad-free music listening',
            'Group Session',
            'Download 10k songs/device, on 5 devices per account',
        ]
    },

    {
        free: 1,
        planName: 'Family',
        price: '₹179',
        numberAccount: 6,
        features: [
            'For family who live together',
            'Block explicit',
            'Ad-free music listening',
            'Group Session',
            'Download 10k songs/ device on 5 devices',
        ]
    },]
