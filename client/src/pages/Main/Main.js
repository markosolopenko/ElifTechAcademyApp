import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import "./mainPage.css"
import MainPageBody from '../../components/MainPageBody/MainPageBody';
import { CreateBank } from '../../components/Modals/CreateBank/CreateBank';



const Main = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openForm = () => {
        setIsOpen(true)
    }
    const closeForm = () => {
        setIsOpen(false)
    }
    return (
        <div className='mainPage'>
            <Header />
            <MainPageBody 
                isOpen={isOpen}
                openForm={openForm}
            />
            <CreateBank 
                open={isOpen}
                closeForm={closeForm} 
            />
        </div>
    )
}
export default Main;