import React, {useState} from 'react';
import {FaTimes} from 'react-icons/fa';
import {CgMenuRight} from 'react-icons/cg';
import {IconContext} from 'react-icons';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavLinks,
    NavItem,
} from './NavbarStyles.js';


import {useLocation, useNavigate} from 'react-router-dom';

import {useTranslation} from "react-i18next";


const Navbar = () => {
    const {t} = useTranslation(['menu_home', 'menu_mirror', 'menu_reg', 'menu_review', 'menu_vavada']);
    const [show, setShow] = useState(false);

    let navigate = useNavigate();
    let location = useLocation();

    const handleClick = () => {
        setShow(!show);
    };

    const scrollTo = (id) => {
        const element = document.getElementById(id);

        element.scrollIntoView({
            behavior: 'smooth',
        });
    };

    const closeMobileMenu = (to, id) => {
        if (id && location.pathname === '/') {
            scrollTo(id);
        }

        navigate(to);
        setShow(false);
    };

    return (
        <>
            <IconContext.Provider value={{color: '#ff00ff'}}>
                <Nav>
                    <NavbarContainer>

                        <NavLogo to="/">
                            <NavIcon src="./assets/logo.png" alt=" cat casino logo"/>
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {show ? <FaTimes/> : <CgMenuRight/>}
                        </MobileIcon>
                        <NavMenu show={show}>

                            <NavItem>
                                <NavLinks onClick={() => closeMobileMenu( "cat")}>
                                    {t('menu_home')}
                                </NavLinks>
                            </NavItem>
                            {/*<NavItem>*/}
                            {/*    <NavLinks onClick={() => closeMobileMenu("vavada" )}>*/}
                            {/*        {t('menu_vavada')}*/}
                            {/*    </NavLinks>*/}

                            {/*</NavItem>*/}
                            <NavItem>

                                <NavLinks onClick={() => closeMobileMenu("cat" )}>
                                    {t('menu_mirror')}
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks onClick={() => closeMobileMenu("cat")}>
                                    {t('menu_reg')}
                                </NavLinks>
                            </NavItem>
                        </NavMenu>

                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
