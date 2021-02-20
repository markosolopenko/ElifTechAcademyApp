import React from 'react';
import BankForm from '../../Forms/BankForm/BankForm';
import axios from 'axios';
import './createBank.css'
import { Modal } from '../../../common/Modal/Modal';
import { Portal } from '../../../common/Portal/Portal';


export const CreateBank = ({open, closeForm, banksNames}) => {
    const handleSubmit = (values) => {
        const newBank = {
            bankName: values.bankName,  
            interestRate: values.interestRate.toString(),  
            maximumLoan: values.maximumLoan.toString(),
            minimumDownPayment: values.minimumDownPayment.toString(),
            loanTerm: values.loanTerm
        }
        axios.post('http://localhost:3002/main/postBank', newBank);
    }
    return (
        <Portal className="modal-create" element="div">
            <Modal className="createBankModal" open={open}>
                <BankForm 
                    state={
                        {
                            bankName: '',  
                            interestRate: '',  
                            maximumLoan: '',
                            minimumDownPayment: '',
                            loanTerm: ''
                        }
                    }
                    handleSubmit={handleSubmit}
                    closeForm={closeForm}
                    banksNames={banksNames}
                />
            </Modal>
        </Portal>
    )
}

