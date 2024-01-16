// utils.js
export const calculatePrice = (startDate, endDate) => {
    const baseRate = 20;
    const numberOfDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
    return baseRate * numberOfDays;
  };
  