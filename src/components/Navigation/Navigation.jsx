import './navigation.style.css';
import logo from '../../assets/logo.svg';

const Navigation = () => {

    return (
        <div className="navigation">
            <div className="navigation_wrapper">
                    <img src={logo} alt="My Portfolio Logo" className="logo" />
            </div>
        </div>
    );
};

export default Navigation;