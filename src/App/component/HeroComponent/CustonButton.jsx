import style from './PremiumOffer.module.css'
import {combineClasses} from '../../../utils/format.jsx'

export const CustonButton = (props) => {

    const classNames = {
        primary: "Btn",
        outline: "transparentbtn",
        secondary: "bigBtn",
        outlinetwo: "Btn-invert",
        logprimary: "LogBtnBlack",
        logsecondary: "LogBtnBlue",
        logoutline: "LogBtnTrans",
        loginprimary: "logInBtn"
        
    }

    const className = classNames[props.type] || classNames.primary
    const classes = combineClasses(className, props.className)
        
        return(
            props.onClick ?
            <button onClick={props.onClick} className={classes}>
                {props.children}

            </button>
                :
            <a href='#' className={classes}>{props.children}</a>
        )
 
}