import { createContext, useReducer } from 'react';
import { reducer } from './reducers';


export const StateContext = createContext(null);
export const DispatchContext = createContext(null);  

const initialState = {
    banks: [],
    bankId: '',
    bankToEdit: {},
    banksNames: [],
    selectedBank: {},
    monthlyPayment: ''
};


export const BanksContext = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
}





