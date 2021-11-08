import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  background-color: ${({ color }) => color};
  border: ${({ color }) => (color === 'white' ? '2px solid #D3D3D3' : 'none')};
  color: ${({ color }) => (color === 'white' ? 'black' : 'white')};
  cursor: pointer;
  border-radius: 4px;
  padding: 5px 30px;
`;

const SocialMediaBtn = ({ text, icon, color }) => {
  return (
    <ButtonStyled color={color}>
      {icon}
      {text}
    </ButtonStyled>
  );
};

export default SocialMediaBtn;
