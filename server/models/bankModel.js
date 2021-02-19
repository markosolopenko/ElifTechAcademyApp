const mongoose = require('mongoose');

const bankSchema = {
    bankName: String, 
    interestRate: String, 
    maximumLoan: Number,
    minimumDownPayment: String,
    loanTerm: String,
}

const Bank = mongoose.model("Bank", bankSchema);

module.exports = Bank;