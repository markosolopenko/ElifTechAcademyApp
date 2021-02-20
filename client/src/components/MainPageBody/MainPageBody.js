import React from 'react';
import './mainPageBody.css'

const MainPageBody = ({openForm}) => {
    return (
        <div className="mainPageBody">
            <div className="slogon">
                <div className="welcome">
                    <div className="welcomeStart">Welcome to</div>
                    <div className="logo">ElifTech</div>
                    <div className="welcomeEnd">banks website</div>
                </div>
                <div className="opportunities">
                    <div className="opportunities-text">With us you can easy
                        <span className="colon">:</span></div>
                    <div className="opportunitie">
                        <span className="dash">-</span> 
                        conveniently create banks 
                    </div>
                    <div className="opportunitie">
                        <span className="dash">-</span> 
                        calculate mortgage payments
                    </div>
                </div>   
            </div>
            <div className="buttonCreateBank" onClick={openForm}>
                <button className="createBank">Create Bank</button>
            </div>
        </div>
    )
}

export default MainPageBody;