import styled from 'styled-components';
import { ToggleProvider, useToggleContext } from './useToggleContext';

const Container = styled.div`
  box-sizing: border-box;
  width: fit-content;
  height: 45px;
  position: relative;
  display: flex;
  margin: 0 auto;
  background-color: #ebebeb;
  border-radius: 24px;
`;

const ButtonContainer = styled.button`
  box-sizing: border-box;
  width: 110px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 10px 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 1;
  color: ${({ isSelected }) => (isSelected ? 'black' : 'gray')};
`;

const SlidingBoxContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 110px;
  height: 100%;
  background-color: white;
  border: 3px solid #ebebeb;
  border-radius: 24px;
  transition: 0.3s;
  transform: ${({ currentIndex }) => `translateX(${currentIndex * 100}%)`};
`;

const SlidingBox = () => {
  const { currentIndex } = useToggleContext();

  return <SlidingBoxContainer currentIndex={currentIndex} />;
};

const Button = ({ label }) => {
  const { currentValue, setCurrentValue } = useToggleContext();

  const isSelected = label === currentValue;

  const onButtonClick = () => {
    setCurrentValue(label);
  };

  return (
    <ButtonContainer isSelected={isSelected} onClick={onButtonClick}>
      {label}
    </ButtonContainer>
  );
};

const Toggle = ({ children }) => {
  return (
    <ToggleProvider>
      <Container>
        {children}
        <SlidingBox />
      </Container>
    </ToggleProvider>
  );
};

Toggle.Button = Button;

export default Toggle;
