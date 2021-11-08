import React from 'react';
import styled from 'styled-components';

//components
import SocialMediaBtn from '../Buttons/SocialButton';

// icons
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

const FormTop = () => {
  return (
    <FormTopWrapper>
      <h2>Get Started</h2>
      <div className='login-text'>
        <p>Already have an account?</p>
        <h5>Login</h5>
      </div>
      <MediaButtons>
        <SocialMediaBtn icon={<FcGoogle />} text='sign up' color='white' />
        <SocialMediaBtn icon={<BsFacebook />} text='sign up' color='#3b5998' />
      </MediaButtons>
    </FormTopWrapper>
  );
};

export default FormTop;

// styles
const FormTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-weight: 600;
  }

  .login-text {
    font-weight: 300;
    font-size: 0.9em;

    h5 {
      font-weight: 300;
      color: var(--primary-color);
    }
  }
`;

const MediaButtons = styled.div`
  display: flex;
  gap: 20px;

  button {
    width: calc(100% / 2);
  }
`;
