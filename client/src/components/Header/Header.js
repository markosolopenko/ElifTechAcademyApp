import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="header">
            <div className="navbar">
                <div className="brand">
                    <div className="brandText">ElifTech</div>
                </div>
                <div className="refs">
                    <Link to="/banks" className="link">
                        <div className="banksRef">
                            Banks
                        </div>
                    </Link>
                    <Link to="/morgageCalculator" className="link">
                        <div className="morgageCalculatorRef">
                            Morgage Calculator
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Header;