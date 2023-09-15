const validateNumberOfBeings: (numberOfBeings: string) => string[] = (
  numberOfBeings
) => {
  const errors = [];

  if (!/^\d+$/.test(numberOfBeings) || isNaN(Number(numberOfBeings))) {
    errors.push("Number of beings must be a valid number.");
  }

  if (Number(numberOfBeings) < 1000000000) {
    errors.push("Number of beings must be at least 1,000,000,000.");
  }

  return errors;
};

export default validateNumberOfBeings;
