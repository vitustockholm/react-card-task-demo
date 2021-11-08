import React from 'react';
import styled from 'styled-components';
import Form from '../Form/Form';

const RegistrationForm = () => {
  return (
    <RegistrationFormWrapper>
      <RegistrationFormLeft>
        <img
          src='https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/logo.svg'
          alt=''
        />
        <div className='brand-text'>
          <h4>Start fro free & Get</h4>
          <h4>Attractive offers Today!</h4>
        </div>
      </RegistrationFormLeft>
      <RegistrattionFormRigth>
        <Form />
      </RegistrattionFormRigth>
    </RegistrationFormWrapper>
  );
};

export default RegistrationForm;

const RegistrationFormWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: var(--primary-color);
  border: 2px solid var(--button-hover);
  border-radius: 15px;
`;

const RegistrationFormLeft = styled.div`
  position: relative;
  background-image: url('https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/illustration.svg');
  background-position: center;
  background-repeat: no-repeat;

  background-size: 85%;
  height: fit-content;
  width: calc(100% / 2);
  padding: 15px;
  border-radius: 15px;

  img {
    width: 20%;
  }
  .brand-text {
    color: white;
    text-align: center;
    padding-top: 350px;
    h4 {
      margin: 0;
      font-weight: 500;
      font-size: 0.9em;
    }
  }
`;
const RegistrattionFormRigth = styled.div`
  width: calc(100% / 2);
  background-color: white;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  padding: 35px;
  padding-top: 40px;

  h3 {
    font-weight: 400;
    text-align: center;
  }
`;
