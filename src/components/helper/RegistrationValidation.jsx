const RegistrationValidation = ({ render }) => {
  const validate = (input) => {
    if (input === undefined) return null;
    if (!input) return 'Error';
  };
  return render(validate);
};

export default RegistrationValidation;
