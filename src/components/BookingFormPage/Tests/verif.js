import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from 'react-modal';
import { IoShieldCheckmark } from 'react-icons/io5';
import './BookingFormPage.css';


const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  cardHolderName: Yup.string().required('Card Holder Name is required'),
  cardNumber: Yup.string().required('Card Number is required'),
  expirationDate: Yup.string().required('Expiration Date is required'),
  cvc: Yup.string().required('CVC/CVV is required'),
});

const verificationCodeValidationSchema = Yup.object().shape({
  verificationCode: Yup.string().required('Verification Code is required'),
});

const BookingFormPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');

  const initialValues = {
    name: '',
    username: '',
    email: '',
    cardHolderName: '',
    cardNumber: '',
    expirationDate: '',
    cvc: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('Form submitted:', values);
    setSubmitting(false);
    openModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleVerificationCodeSubmit = () => {
    alert(`Verification Code: ${verificationCode}`);
    closeModal();
  };
  return (
    <div className='booking-form-section'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className='booking-form'>
          <p className='intro-text'>Let us know who you are</p>
          <div>
            <label  className='input-label' htmlFor='name'>Name </label>
            <Field  className="form-input" type='text' name='name'  />
            <ErrorMessage name='name' component='div' className='error' />
          </div>
          <div>
            <label className='input-label' htmlFor='username'>Username</label>
            <Field  className="form-input" type='text' name='username' />
            <ErrorMessage name='username' component='div' className='error' />
          </div>
          <div>
            <label className='input-label' htmlFor='email'>Email Address</label>
            <Field   className="form-input" type='email' name='email' />
            <ErrorMessage name='email' component='div' className='error' />
          </div>

          <p className='secure-payment'>
          
            <IoShieldCheckmark className='secure-icon'></IoShieldCheckmark> <span className='secure-label'>Secure payment </span> All card information is fully encrypted, secure and protected.</p>

          <div>
            <p className='input-label'>Card Holder Name</p>
            <Field   className="form-input" type='text' name='cardHolderName' />
            <ErrorMessage name='cardHolderName' component='div' className='error' />
          </div>
          <div>
            <p className='input-label' >Credit/debit card number *</p>
            <Field  className="form-input"  type='text' name='cardNumber' />
            <ErrorMessage name='cardNumber' component='div' className='error' />
          </div>
          <div>
            <p className='input-label'>Expiration Date</p>
            <Field  className="form-input"  type='text' name='expirationDate' />
            <ErrorMessage name='expirationDate' component='div' className='error' />
          </div>
          <div>
            <p className='input-label'>CVC/CVV *</p>
            <Field  className="form-input"  type='text' name='cvc' />
            <ErrorMessage name='cvc' component='div' className='error' />
          </div>
          <br />
          <button className='book-button' type='submit'>Submit</button>
        </Form>
      </Formik>
       {/* Modal for verification code */}
       <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel='Verification Code Modal'
      >
        <div className='verification-section'>
          <label>Verification Code</label>
          <p>Enter the verification code received:</p>
          {/* Input field for verification code */}
          <Formik
            initialValues={{ verificationCode: '' }}
            validationSchema={verificationCodeValidationSchema}
            onSubmit={() => {}}
          >
            <Form>
              <Field
                type='text'
                name='verificationCode'
                className='form-input'
                placeholder='Enter verification code'
              />
              {/* Error message for verification code */}
              <ErrorMessage
                name='verificationCode'
                component='div'
                className='error'
              />
              {/* Submit button for verification code */}
              <button type='button' onClick={handleVerificationCodeSubmit}>
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </Modal>
    </div>
  );
};

export default BookingFormPage;
