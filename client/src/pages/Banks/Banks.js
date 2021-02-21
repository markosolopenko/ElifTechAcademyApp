import React, { useContext, useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import BanksPageBody from '../../components/BanksPageBody/BanksPageBody';
import { DispatchContext, StateContext } from '../../Context/BanksContext';
import { actions } from '../../Context/actions';
import axios from 'axios';
import {EditBank} from '../../components/Modals/EditBank/EditBank';

const Banks = () => {
    const [isOpen, setIsOpen] = useState(false);
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);
    useEffect(() => {
        axios.get('https://elif-tech-academy-project.herokuapp.com/main/createdBanks')
            .then(res => {
                dispatch({
                    type: actions.FETCH_BANKS, 
                    payload: res.data
                })
            });
    }, [])

    const handleEditClick = (bank, id) => {
        setIsOpen(true)
        dispatch({
            type: actions.SET_ID,
            payload: {id: id}
        })
        dispatch({
            type: actions.SET_BANK_TO_EDIT_MODAL,
            payload: {bank: bank}
        })
    }
    const handleDeleteClick = (id) => {
        axios.delete(`http://localhost:3002/main/${id}`);
        setTimeout(() => {
            window.location.reload();
        }, 500)
    } 

    const closeForm = () => {
        setIsOpen(false)
    }
    return (
        <div className="banksPage">
            <Header />
            <EditBank 
                open={isOpen} 
                closeForm={closeForm} 
            />  
            {state.banks ? 
                <BanksPageBody 
                    banks={state.banks} 
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                /> : 
                <div className="no-created">Nothing created</div>
            }
        </div>
    
    )
}

export default Banks;