import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = ({handleClickCalculate}) => {
    return (
        <div className="header">
            <div className="navbar">
                <Link to="/main" className="link">
                    <div className="brand">
                        <div className="brandText">ElifTech</div>
                    </div>
                </Link>
                <div className="refs">
                    <Link to="/banks" className="link">
                        <div className="banksRef">
                            Banks
                        </div>
                    </Link>
                    <Link to="/morgageCalculator" className="link" 
                        onClick={handleClickCalculate}
                    >
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