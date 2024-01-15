import React from 'react';

const Form = ({ totalPrice }) => {
  return (
    <div>
      <p>Total Price is ${totalPrice}</p>
      <input type='text' value={totalPrice} readOnly />
    </div>
  );
};

export default Form;
