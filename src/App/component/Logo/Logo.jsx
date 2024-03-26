import LogoWhite from '../../assests/images/LogoWhite.png'
import LogoBlack from '../../assests/images/LogoBlack.png'
import style from './Logo.module.css'

export function Logo(props) {
    // if(props.whiteLogo) {
    //      return (
    //     <a href='#/dashboard'>
    //         <img src={LogoWhite} alt="Logo Icon"/>
    //     </a>
    // )
        

    // }else{
    //     return (
    //         <a href='#/dashboard'>
    //             <img src={LogoBlack} />
    //         </a>
    //     )
    // }
    const myLogo = props.whiteLogo ? LogoWhite : LogoBlack;

    return(
        <a href='#/dashboard' className={style.logo} >
           <img src={myLogo} alt=''/>
        </a>

    )

};