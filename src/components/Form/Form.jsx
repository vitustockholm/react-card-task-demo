import styled from 'styled-components';

//components at form viewport 1left 2right
import FormBottom from './FormB';
import FormTop from './Form2';

const Form = () => {
  return (
    <Wrapper>
      <FormTop />
      <h3>Or</h3>
      <FormBottom />
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-bottom: 10px;
`;
