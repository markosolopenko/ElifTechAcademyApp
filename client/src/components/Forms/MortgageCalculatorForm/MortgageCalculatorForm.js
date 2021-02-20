import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import "./mortgageCalculatorForm.css";


const MyTextInput = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name} className="label"></label>
      <input className="calcInputField" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="calcErrorMessage">{meta.error}</div>
      ): null}
    </div>
  )
}


const MortgageCalculatorForm = (props) => { 
    const {banksNames, handleSubmit, handleSelect, selectedBank, monthlyPayment}= props
    if(selectedBank) {
      var bankName = selectedBank.bankName;
      var maxLoan = selectedBank.maximumLoan;
      var textLoan = "Max loan which bank can give " + maxLoan
      var minDownPay = selectedBank.minimumDownPayment.replace(' ', '');
      var textDownPay = "Min down payment in this bunk is " + minDownPay;
    }else {
      var bankName = '';
    }
    return (
        <Formik
            enableReinitialize
            initialValues={{initialLoan: "", downPayment: ""}}
            validationSchema={Yup.object({
              initialLoan: Yup.number()
                .typeError("Number Expected")
                .max(maxLoan ? maxLoan : null, textLoan ? textLoan: null)
                .required('Required!!!'),
              downPayment: Yup.number()
                .typeError("Number Expected")
                .min(minDownPay ? minDownPay : null, textDownPay ? textDownPay: null)
                .required("Required!!!"),
              
            })}
            onSubmit={(values, {setSubmitting}) => {
              setSubmitting(true)
              handleSubmit(values)
              setSubmitting(false)
            }}
          >
          {({ resetForm, values }) => (
            <div className="black-bakcground">
              { monthlyPayment === '' ? 
                <div className="plan">
                  <div className="payment-plan">
                    Payment plan for your mortgage<span>:</span> 
                  </div>
                  <div className="payment-plan">
                    Put all needed information and we will 
                    calculate <span>monthly mortgage payment</span>
                  </div>
                </div> :
                <div className="result">
                  <div className="resultText">You have to pay:</div>
                  <div className="resultNum">{monthlyPayment}$</div>
                  <div className="resultText">every month.</div>
                </div>
              }
              <Form className="calculatorForm">
                <MyTextInput 
                  label="initialLoan"
                  name="initialLoan" 
                  type="text" 
                  autoComplete="off"
                  placeholder="Init Loan" 
                />
                <MyTextInput 
                  label="downPayment"
                  name="downPayment" 
                  type="text" 
                  autoComplete="off"
                  placeholder="Down Payment" 
                />
                <label className="bankName"></label>
                <select name="bankName" className="banksNamesSelect"
                  onChange={(e) => handleSelect(e.target.value)}
                >
                  <option value="" className="optionBank">Select bank</option>
                  {
                    banksNames.map((name, id) => 
                      <option 
                        key={id} 
                        value={name} 
                        className="optionBank"
                      >
                        {name}
                      </option>
                    )
                  }
                </select>
                <button 
                  type='submit'
                  className="calculate"
                >
                  Calculate
                </button>
              </Form>
            </div>
          )}
        </Formik>
    )
}

export default MortgageCalculatorForm;