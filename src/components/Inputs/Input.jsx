import React from 'react';
import styled from 'styled-components';

const Input = ({
  type,
  placeholder,
  label,
  icon,
  onChange,
  isSubmitted,
  isValid,
}) => {
  return (
    <InputGroupWrapper>
      {label && <label>{label}</label>}
      <div>
        {icon}
        <InputStyled
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          isValid={isValid}
          isSubmitted={isSubmitted}
        />
      </div>
      {isValid && <p className='error-msg'>Input must be filled</p>}
    </InputGroupWrapper>
  );
};

export default Input;

const InputGroupWrapper = styled.div`
  label {
    font-weight: 500;
    font-size: 0.8em;
  }

  div {
    position: relative;

    svg {
      position: absolute;
      top: 6px;
      left: 8px;
      fill: #707070;
    }
  }

  .error-msg {
    color: red;
    max-width: auto;
  }
`;

const InputStyled = styled.input`
  box-sizing: border-box;
  width: 100%;
  border-radius: 5px;
  border: 2px solid #d3d3d3;
  /* border: ${({ isSubmitted, isValid }) =>
    !isSubmitted && !isValid ? '2px solid #d3d3d3' : '2px solid red'}; */
  padding: 5px;
  padding-left: 30px;
  outline: none;

  &:focus {
    border: 2px solid var(--primary-color);
  }
`;
