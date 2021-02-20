import BankForm from '../../Forms/BankForm/BankForm';
import { Portal } from '../../../common/Portal/Portal';
import { Modal } from '../../../common/Modal/Modal';
import axios from 'axios';
import { useContext } from 'react';
import { DispatchContext, StateContext } from '../../../Context/BanksContext';
import './editBank.css'

export const EditBank = ({open, closeForm}) => {
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)
    const handleSubmit = (values) => {
        axios.patch(`http://localhost:3002/main/${state.bankId}`, values)
            .then(res => {
                if (res.ok) {
                    return res.json()
                }
            }).then(jsonRes =>jsonRes)
    }
    return (
        <Portal className="root-port" element="div">
            <Modal className="edttBankModal" open={open}>
                <BankForm 
                    banksNames={state.banksNames}
                    state={state.bankToEdit}
                    closeForm={closeForm}
                    handleSubmit={handleSubmit}
                />
            </Modal>
        </Portal>
    )
}