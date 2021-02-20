import React, { useEffect, useState, useContext } from 'react';
import Header from '../../components/Header/Header';
import "./mainPage.css"
import MainPageBody from '../../components/MainPageBody/MainPageBody';
import { CreateBank } from '../../components/Modals/CreateBank/CreateBank';
import { StateContext, DispatchContext } from '../../Context/BanksContext';
import { actions } from '../../Context/actions';
import axios from 'axios';


const Main = () => {
    const [isOpen, setIsOpen] = useState(false);
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);
    useEffect(() => {
        axios.get('http://localhost:3002/main/createdBanks')
            .then(res => {
                dispatch({
                    type: actions.FETCH_BANKS, 
                    payload: res.data
                })
            });
        dispatch({type: actions.GET_ALL_BANKS_NAMES})
    }, [state.banks])

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
                banksNames={state.banksNames}
                open={isOpen}
                closeForm={closeForm} 
            />
        </div>
    )
}
export default Main;