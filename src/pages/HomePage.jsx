import React, { useState } from 'react';
import styled from 'styled-components';

//components
import CommonButton from '../components/Buttons/CommonButton';
import Modal from '../components/modal/Modal';
import RegistrationForm from '../registrationForm/RegistrationForm';

const HomePageMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('https://raw.githubusercontent.com/JoyShaheb/Project-image-repo/e2aa9d5d409b28efe7040e4b92da891c64ee23ce/Form-Validation/images/illustration.svg');
  background-size: 100%;
  background-repeat: no-repeat;
`;

const HomePage = () => {
  //Hooks
  // -- state local
  const [isModalOpen, setIsModalOpen] = useState(false);

  // -- custom functions
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <HomePageMain>
        <CommonButton text='Sign up' action={openModal} width={'320px'} />
      </HomePageMain>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <RegistrationForm />
        </Modal>
      )}
    </>
  );
};

export default HomePage;
