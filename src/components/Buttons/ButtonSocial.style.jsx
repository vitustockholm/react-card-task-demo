import styled from 'styled-components';

// export const StyledButton = styled.button`
//   border: none;
//   padding: 10px 15px;
//   background-color: ${(props) =>
//     props.primary ? '#0000ff' : props.secondary ? '#f0f0f0' : '#0000fff'};
//   color: ${(props) =>
//     props.primary ? '#fff' : props.secondary ? '#0000ff' : '#fff'};

//   &:hover {
//     opacity: 0.85;
//     cursor: pointer;
//   }

//   &:disabled {
//     opacity: 0.4;
//     cursor: not-allowed;
//   }
// `;
/////////////////////
export const CustomBtn = styled.button`
  display: inline-block;
  background-color: white;
  color: #444;
  width: 150px;
  /* margin-left: 10px; */
  padding-right: 25px;
  text-align: center;
  border-radius: 5px;
  border: thin solid #888;
  box-shadow: 1px 1px 1px grey;
  white-space: nowrap;

  :hover {
    cursor: pointer;
    opacity: 0.75;
  }
`;

export const SpanLabel = styled.label`
  font-family: serif;
  font-weight: normal;
`;

export const SpanIcon = styled.span`
  display: inline-block;
  vertical-align: middle;
  width: 62px;
  height: 32px;
`;

export const ButtonText = styled.text`
  /* display: inline-block;
  vertical-align: middle;
  padding-left: 62px;
  padding-right: 42px;
  font-size: 14px; */
  font-weight: bold;

  font-family: 'Roboto', sans-serif;
`;
