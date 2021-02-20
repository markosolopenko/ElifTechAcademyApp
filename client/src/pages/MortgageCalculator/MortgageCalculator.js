import React, { useContext, useEffect } from 'react';
import Header from '../../components/Header/Header';
import { DispatchContext, StateContext } from '../../Context/BanksContext';
import { actions } from '../../Context/actions';
import MortgageCalculatorForm from '../../components/Forms/MortgageCalculatorForm/MortgageCalculatorForm';


const MortgageCalculator = () => {
    const dispatch = useContext(DispatchContext);
    const state = useContext(StateContext); 
    const handleSelect = (selected) => {  
        dispatch({
            type: actions.SET_SELECTED_BANK,
            payload: {selected: selected}
        })
    }

    const handleSubmit = (values) => {
        const borrowed = Number(values.initialLoan) - values.downPayment;
        const annualRate = Number(state.selectedBank[0].interestRate) * borrowed / 100;
        const numOfMonthlyPayments = Number(state.selectedBank[0].loanTerm);
        const monthlyPayment = borrowed / annualRate * borrowed / 100 / numOfMonthlyPayments;
        dispatch({
            type: actions.SET_MONTHLY_PAYMENT,
            payload: {result: monthlyPayment}
        });
    }
    console.log(state);
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