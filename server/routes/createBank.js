const express = require('express');
const router = express.Router();

const Bank = require("../models/bankModel");

router.route('/postBank').post((req, res) => {
    const bankName = req.body.bankName;
    const interestRate = req.body.interestRate; 
    const maximumLoan = req.body.maximumLoan;
    const minimumDownPayment = req.body.minimumDownPayment;
    const loanTerm = req.body.loanTerm;
    const newBank = new Bank({bankName, interestRate, maximumLoan, minimumDownPayment, loanTerm});
    newBank.save();
});

router.route('/createdBanks').get((req, res) => {
    Bank.find()
        .then(foundBank => res.json(foundBank));
});

router.route('/:bankId').patch((req, res) => {
    Bank.updateOne(
        {_id: req.params.bankId},
        {$set: {
                bankName: req.body.bankName,
                interestRate: req.body.interestRate,
                maximumLoan: req.body.maximumLoan,
                minimumDownPayment: req.body.minimumDownPayment,
                loanTerm: req.body.loanTerm 
            }
        }
    )
    .then(updatedBank => res.json(updatedBank))
    .catch(err => console.log(`Error${err}`));
});
router.route('/:bankId').delete((req, res) => {
    Bank.remove({_id: req.params.bankId})
        .then(removedBank => res.json(removedBank))
        .catch(err => console.log(`ERROR${err}`));
});

module.exports = router;