import React, { useContext } from 'react';
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
       console.log("some"); 
    }
    return (
        <div className="mortgageCalculator">
            <Header />
            <MortgageCalculatorForm 
                handleSelect={handleSelect}
                selectedBank={state.selectedBank[0]}
                banksNames={state.banksNames} 
            />
        </div>
    );
}

export default MortgageCalculator;