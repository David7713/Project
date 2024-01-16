const calculatePrice = () => {
    // Assuming the base rate is $20 per room per day
    const baseRate = 20;
    const numberOfDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1; // Include the first day in the calculation
    return baseRate * numberOfDays
  };


  const [startDate, setStartDate] = useState(currentDate);
  const [endDate, setEndDate] = useState(new Date(currentDate.getTime() + 24 * 60 * 60 * 1000)); // Set default endDate to one day after startDate