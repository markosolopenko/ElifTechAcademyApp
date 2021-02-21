const mongoose = require('mongoose');

const bankSchema = {
    bankName: String, 
    interestRate: String, 
    maximumLoan: String,
    minimumDownPayment: String,
    loanTerm: String,
}

const Bank = mongoose.model("Banks", bankSchema);

module.exports = Bank;