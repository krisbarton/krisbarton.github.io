import React, { useContext } from 'react';
import Logo from '../../assets/bp-logo-update.svg';
import Bars from '../../assets/bars.svg';
import { PageContext } from '../context/pageContext';

const Header = () => {
    const { pageHeading } = useContext(PageContext);
    console.log("page heading ", pageHeading);

    return (
        <header className="header">
            <div className="header__content">
                <img src={Logo} className="header__logo" alt="Blue Prism Logo" />
                <h1>{pageHeading}</h1>
                <nav>
                    <img src={Bars} alt="Three horizontal bars indicating a navigation icon - otherwise known as a Hamburger Menu Icon" />
                </nav>
            </div>
        </header>
    )

}

export default Header;

