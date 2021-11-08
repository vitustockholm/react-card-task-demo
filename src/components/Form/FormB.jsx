import React, { useState } from 'react';
import styled from 'styled-components';

//components { Button , Input}
import Input from '../Inputs/Input';
import CommonButton from '../Buttons/CommonButton';

//extra point
import RegistrationValidation from '../../helpers/RegistrationValidation';

//icons
import { FaRegUser } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BiLock } from 'react-icons/bi';

//render props validacija

const FormBottom = () => {
  //Hooks
  // -- state
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // -- custom functions
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <FormWrapper onSubmit={(e) => handleSubmit(e)}>
      <RegistrationValidation
        value={name}
        isSubmitted={isSubmitted}
        render={(isValid) => (
          <Input
            type='name'
            placeholder='John Smith'
            label='Name'
            icon={<FaRegUser />}
            isValid={isValid}
            isSubmitted={isSubmitted}
            onChange={(e) => setName(e.target.value)}
          />
        )}
      />
      <RegistrationValidation
        value={email}
        isSubmitted={isSubmitted}
        render={(isValid) => (
          <Input
            type='email'
            placeholder='John@gmail.com'
            label='Email'
            icon={<AiOutlineMail />}
            isValid={isValid}
            isSubmitted={isSubmitted}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}
      />

      <RegistrationValidation
        value={password}
        isSubmitted={isSubmitted}
        render={(isValid) => (
          <Input
            type='password'
            placeholder='*****'
            label='Password'
            icon={<BiLock />}
            isValid={isValid}
            isSubmitted={isSubmitted}
            onChange={(e) => setPassword(e.target.value)}
          />
        )}
      />
      <CommonButton text='Submit' width='100%' />
    </FormWrapper>
  );
};

export default FormBottom;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 5px;
  button {
    margin-top: 15px;
  }
`;
