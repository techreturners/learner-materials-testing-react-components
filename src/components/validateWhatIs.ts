const validateWhatIs: (whatIs: string) => string[] = (whatIs) => {
    const errors = [];
  
    if (whatIs !== "4") {
      errors.push('You must select "4".');
    }
  
    return errors;
  };
  
  export default validateWhatIs;
  