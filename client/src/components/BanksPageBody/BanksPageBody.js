import React from 'react';
import './banksPageBody.css';


const BanksPageBody = ({banks, handleEditClick, handleDeleteClick}) => {
    return (
        <div className="banksPageBody">
            {
                banks.map((bank, id) => 
                    <div className="banksPageBodyElement" key={id}>
                        <div className="bankName">
                            <div className="text">Name: </div>
                            <div className="name">{bank.bankName}</div>
                        </div>
                        <div className="bankRate">
                            <div className="text">Interest Rate:</div>
                            <div className="name">{bank.interestRate}%</div>
                        </div>
                        <div className="bankMaximumLoan">
                            <div className="text">Maximum Loan:</div> 
                            <div className="name">{bank.maximumLoan}$</div>
                        </div>
                        <div className="bankMinimumDownPayment"> 
                            <div className="text">Minimum Down Payment:</div>
                            <div className="name">{bank.minimumDownPayment}$</div>
                        </div>
                        <div className="bankLoanTerm">
                            <div className="text">Loan Term:</div>
                            <div className="name">{bank.loanTerm} years</div>
                        </div>
                        <div className="buttons">
                            <div className="editButton" 
                                 onClick={() => handleEditClick(bank, bank._id)}
                            > 
                                <button className="edit">Edit</button>
                            </div>
                            <div className="deleteButton" 
                                 onClick={() => handleDeleteClick(bank._id)}
                            > 
                                <button className="delete">Delete</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default BanksPageBody;