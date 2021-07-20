import styled from 'styled-components';

const TextStepContainer = styled.div`
  align-items: flex-end;
  display: flex;
  text-align:left;
  justify-content: ${props => (props.user ? 'flex-end' : 'flex-start')};
`;

export default TextStepContainer;
