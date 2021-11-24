import React from 'react';
import '../Navbar/Navbar.scss';
import logo from '../../images/logo.png';
import { FcNext } from 'react-icons/fc';
import { HiMenuAlt1 } from 'react-icons/hi';

const Navbar = (props) => {
    const {getStarted} = props;
    return (
        <nav className="navbar container-fluid">
            <div className="nav-logo offset-lg-1">
                <img src={logo} alt="" />
            </div>
            <div>
                <input type="checkbox" name="" id="menu-check" className="menu-check" />
                <label for="menu-check" className="hamberger">
                    {/* <HiMenuAlt1 className="hamberger-icon"></HiMenuAlt1> */}
                    <i className="fas fa-bars"></i>
                </label>
            </div>
            <ul className={`${getStarted} === ${false} ? getStartedWith : ''`}>
                <li><a href="#results">Results</a></li>
                {
                    getStarted === false ? '' : <li><a href="#get started">Get Started<FcNext></FcNext></a></li>
                }
            </ul>
        </nav>
    );
};

export default Navbar;