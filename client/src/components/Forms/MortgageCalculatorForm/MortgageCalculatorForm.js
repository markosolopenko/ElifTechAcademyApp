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
const MySelect = ({label, handleSelect, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name} className="label"></label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="calcErrorMessage">{meta.error}</div>
      ): null}
    </div>
  )
}


const MortgageCalculatorForm = ({banksNames, handleSubmit, handleSelect, selectedBank}) => { 
    if(selectedBank) {
      var maxLoan = selectedBank.maximumLoan;
      var textLoan = "Max loan which bank can give" + maxLoan
      var minDownPay = selectedBank.minimumDownPayment;
      var textDownPay = "Min down payment in this bunk is" + minDownPay;
    }
    return (
        <Formik
            enableReinitialize
            initialValues={{initialLoan: "", downPayment: "", bankName: ""}}
            validationSchema={Yup.object({
              initialLoan: Yup.number()
                .typeError("Number Expected")
                .max(maxLoan ? maxLoan : null, textLoan ? textLoan: null)
                .required('Required!!!'),
              downPayment: Yup.number()
                .typeError("Number Expected")
                .max(minDownPay ? minDownPay : null, textDownPay ? textDownPay: null)
                .required("Required!!!"),
              bankName: Yup.string()
                .oneOf(banksNames, "Invalid Bank")
                .required("Required")
            })}
            onSubmit={(values, {setSubmitting}) => {
              setSubmitting(true)
              handleSubmit(values)
              setSubmitting(false)
            }}
          >
          {({ resetForm, values }) => (
            <div className="black-bakcground">
              <div className="plan">
                <div className="payment-plan">
                  Payment plan for your mortgage<span>:</span> 
                </div>
                <div className="payment-plan">
                  Put all needed information and we will 
                  calculate <span>monthly mortgage payment</span>
                </div>
              </div>
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
                <MySelect label="bankName" name="bankName" className="banksNamesSelect">
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
                </MySelect>
                <button className="calculate">Calculate</button>
              </Form>
            </div>
          )}
        </Formik>
    )
}

export default MortgageCalculatorForm;