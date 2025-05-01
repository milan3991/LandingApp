import { useState } from "react";
import './navigation.style.css';
import logo from '../../assets/logo.svg';
import burgerIcon from '../../assets/burger.svg';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navigation">
            <div className="navigation_wrapper">
                    <img src={logo} alt="My Portfolio Logo" className="logo" />

                <button className={`burger ${menuOpen ? 'rotate' : ''}`} onClick={toggleMenu}>
                    <img src={burgerIcon} alt="Burger menu" />
                </button>
            </div>
        </div>
    );
};

export default Navigation;