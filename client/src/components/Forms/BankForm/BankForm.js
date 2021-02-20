import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import "./bankForm.css";


const MyTextInput = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name} className="label"></label>
      <input className="inputField" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="errorMessage">{meta.error}</div>
      ): null}
    </div>
  )
}

const BankForm = ({handleSubmit, state, closeForm}) => {
    return (
        <Formik 
          enableReinitialize
          initialValues={state}
          validationSchema={Yup.object({
            bankName: Yup.string()
            .min(3, 'Required Min 3 symbols!!!')
            .max(20, 'Max available 20 symbols!!!')
            .required('Required!!!'),
            interestRate: Yup.number()
              .typeError('Must be a number')
              .min(0, 'Negaive numbers doesn\'t allowed!!!')
              .required('Reqiured!!!'),
            maximumLoan: Yup.number()
              .typeError('Must be a number')
              .min(0, 'Negaive numbers doesn\'t allowed!!!')
              .required('Required!!!'),
            minimumDownPayment: Yup.number()
              .typeError('Must be a number')
                .min(0, "Negaive numbers doesn\'t allowed!!!")
                .required("Required!!!"),
            loanTerm: Yup.number()
                .min(1, "Min one year!!!")
                .required('Required!!!')
          })}
          onSubmit={(values, {setSubmitting} )=> {
              setSubmitting(true)
              handleSubmit(values)
              setSubmitting(false)
              setTimeout(() => {
                window.location.reload()
              }, 1400)
          }}
        >
        {({ resetForm }) => (
          <Form className="bankForm">
            <MyTextInput
                label="bankName"
                name="bankName" 
                type="text" 
                autoComplete="off"
                placeholder="Bank name" 
            />
            <MyTextInput
                label="interestRate"
                name="interestRate" 
                type="text" 
                className="inputField" 
                autoComplete="off"
                placeholder="Interest rate in %" 
            />
            <MyTextInput
                label="maximumLoan"
                name="maximumLoan" 
                type="text" 
                className="inputField" 
                autoComplete="off"
                placeholder="Maximum loan" 
            />
            <MyTextInput
                label="minimumDownPayment"
                name="minimumDownPayment" 
                type="text" 
                className="inputField" 
                autoComplete="off"
                placeholder="Minimum Down Payment" 
            />
            <MyTextInput
                label="loanTerm"
                name="loanTerm" 
                type="text" 
                className="inputField" 
                autoComplete="off"
                placeholder="Loan term in years" 
            />
            <div className="formButtons">
              <button 
                  type="submit" 
                  className="submitBtn"
              >
                  Submit
              </button>
              <button 
                  type="button" 
                  className="cancel"
                  onClick={() => {
                      closeForm()
                      resetForm({values: state})
                  }}
              >
                  Cancel
              </button>
            </div>
          </Form>
        )}
        </Formik>
    )
}

export default BankForm;