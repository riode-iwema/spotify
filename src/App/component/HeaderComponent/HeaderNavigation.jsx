export const HeaderNavigation = (props) => {
    return(
        <ul className={props.className}>
            <li>
                <a href='/Premium'>Premium</a>
            </li>
            <li>
                <a href='/Support'>Support</a>
            </li>
            <li>
                <a href='/Download'>Download</a>
            </li>
            <li className='hidden-mobile'>
                <a  href='#HeaderNavigation'>|</a>
            </li>
            <li className="active">
                <a href='/Signup'>Sign up</a>
            </li>
            <li className="active">
                <a href='/login'>Log in</a>
            </li>
        </ul>
    )
}
