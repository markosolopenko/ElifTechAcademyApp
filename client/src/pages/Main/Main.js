import React from 'react';
import Header from '../../components/Header/Header';
import "./mainPage.css"
import MainPageBody from '../../components/MainPageBody/MainPageBody';


const Main = () => {
    return (
        <div className='mainPage'>
            <Header />
            <MainPageBody />
        </div>
    )
}
export default Main;