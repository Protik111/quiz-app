import React from 'react';
import '../Navbar/Navbar.scss';
import logo from '../../images/logo.png';
import { FcNext } from 'react-icons/fc';
import { HiMenuAlt1 } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = (props) => {
    const {getStarted, quizPage} = props;

    const { user_name } = useSelector(state => state);
    return (
        <nav className="navbar container-fluid">
            <NavLink to="/" className="nav-logo offset-lg-1">
                <img src={logo} alt="" />
            </NavLink>
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
                    quizPage  === true ? 
                    <li><a href="#get started" className="user-name">{user_name}</a></li> : 
                    <li><a href="#get started" onClick={() => alert("Please Choose Options And Start.")}>Get Started<FcNext></FcNext></a></li>
                }
            </ul>
        </nav>
    );
};

export default Navbar;