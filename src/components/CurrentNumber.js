import styled from "styled-components";
import propTypes from 'prop-types'

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  border: 8px solid red;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-size: 50px;
  background: white;
  color: red;
  font-family: PressStart2P;
`;

const CurrentNumber = ({currentNumber}) => {
  return <Wrapper>{currentNumber}</Wrapper>;
};

CurrentNumber.propTypes = {
  currentNumber: propTypes.string
}

CurrentNumber.defaultProps = {
  currentNumber: ''
}

export default CurrentNumber;
