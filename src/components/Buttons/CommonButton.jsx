import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: var(--primary-color);
  color: white;
  padding: 7px 20px;
  border: none;
  border-radius: 5px;
  width: ${({ width }) => (width ? width : 'fit-content')};
  cursor: pointer;

  &:hover {
    background-color: var(--button-hover);
  }
`;

const CommonButton = ({ text, action, width }) => {
  return (
    <ButtonStyled onClick={action} width={width}>
      {text}
    </ButtonStyled>
  );
};

//Proptypes
CommonButton.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func,
  width: PropTypes.string,
};

export default CommonButton;
