

export const reducer = (state, action) => {
    switch(action.type) {
        case "FETCH_BANKS":
            return {
                ...state,
                banks: action.payload,
            }
        case "SET_ID": 
            return {
                ...state,
                bankId: action.payload.id
            }
        case "SET_BANK_TO_EDIT_MODAL":  
            return {
                ...state, 
                bankToEdit: action.payload.bank
            }
        case "GET_ALL_BANKS_NAMES": 
            return {
                ...state,
                banksNames: state.banks.map(element => element.bankName)
            } 
        case "SET_SELECTED_BANK":
            return {
                ...state, 
                selectedBank: state.banks.filter(bank => 
                    bank.bankName === action.payload.selected
                )
            }
        case "SET_MONTHLY_PAYMENT":
            return {
                ...state,
                monthlyPayment: action.payload.result
            }
        default: 
            return null
    }
} 