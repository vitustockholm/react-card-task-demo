import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  border-radius: 5px;
  width: 320px;
  padding: 6px 14px;
  margin-top: 5px;
  background-color: ${(props) =>
    props.primary ? '#F2877D' : props.secondary ? '#f0f0f0' : '#0000fff'};
  color: ${(props) =>
    props.primary ? '#fff' : props.secondary ? '#0000ff' : '#fff'};

  &:hover {
    opacity: 0.85;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
