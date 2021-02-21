import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';
import { DispatchContext, StateContext } from '../../Context/BanksContext';
import { actions } from '../../Context/actions';
import MortgageCalculatorForm from '../../components/Forms/MortgageCalculatorForm/MortgageCalculatorForm';
import axios from 'axios';

const MortgageCalculator = () => {
    const dispatch = useContext(DispatchContext);
    const state = useContext(StateContext); 
    useEffect(() => {
        axios.get('https://elif-tech-academy-project.herokuapp.com/main/createdBanks')
            .then(res => {
                dispatch({
                    type: actions.FETCH_BANKS, 
                    payload: res.data
                })
                dispatch({type: actions.GET_ALL_BANKS_NAMES})
            }).catch(err => console.log(err))
    }, [dispatch])
    const handleSelect = (selected) => {  
        dispatch({
            type: actions.SET_SELECTED_BANK,
            payload: {selected: selected}
        })
    }

    const handleSubmit = (values) => {
        const borrowed = Number(values.initialLoan) - Number(values.downPayment);
        const addEveryYear = state.selectedBank[0].interestRate * values.initialLoan / 100 * state.selectedBank[0].loanTerm;
        const period = state.selectedBank[0].loanTerm * 12;
        const monthlyPayment = (borrowed + addEveryYear) / period;
        dispatch({
            type: actions.SET_MONTHLY_PAYMENT,
            payload: {result: Math.round(monthlyPayment)}
        });
    }
    return (
        <div className="mortgageCalculator">
            <Header />
            <MortgageCalculatorForm 
                handleSubmit={handleSubmit}
                handleSelect={handleSelect}
                selectedBank={state.selectedBank[0]}
                banksNames={state.banksNames}
                monthlyPayment={state.monthlyPayment} 
            />
        </div>
    );
}

export default MortgageCalculator;