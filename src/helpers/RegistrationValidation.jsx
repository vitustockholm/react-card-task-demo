const RegistrationValidation = ({ value, isSubmitted, render }) => {
  let isValid = false;
  if (value.length === 0 && isSubmitted) isValid = true;

  return render(isValid);
};

export default RegistrationValidation;
