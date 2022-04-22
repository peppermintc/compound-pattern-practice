import _ from 'lodash';
import { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { ToggleProvider, useToggleContext } from './useToggleContext';

const Container = styled.div`
  width: fit-content;
  position: relative;
  display: flex;
  margin: 0 auto;
  padding: 2px;
  background-color: #ebebeb;
  border-radius: 24px;
`;

const ButtonContainer = styled.button`
  width: 100px;
  padding: 10px 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 1;
  color: ${({ isSelected }) => (isSelected ? 'black' : 'gray')};
`;

const ToggleBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${({ childrenLength }) => `${100 / childrenLength}%`};
  height: 100%;
  background-color: white;
  border: 3px solid #ebebeb;
  border-radius: 24px;
  transition: 0.3s;
  transform: ${({ selectedIndex }) => `translateX(${selectedIndex * 100}%)`};
`;

const Button = ({ label }) => {
  const { toggleValue, handleSetToggleValue } = useToggleContext();

  const isSelected = label === toggleValue;

  const onButtonClick = () => {
    handleSetToggleValue(label);
  };

  return (
    <ButtonContainer isSelected={isSelected} onClick={onButtonClick}>
      {label}
    </ButtonContainer>
  );
};

const Toggle = ({ children }) => {
  const [toggleValue, setToggleValue] = useState();
  const [childrenLength, setChildrenLength] = useState();

  useLayoutEffect(() => {
    const setInitialState = () => {
      setToggleValue(children[0].props.label);
      setChildrenLength(children.length);
    };

    setInitialState();
  }, [children]);

  const handleSetToggleValue = (newValue) => {
    setToggleValue(newValue);
  };

  const selectedIndex = _.findIndex(
    children,
    (item) => item.props.label === toggleValue,
  );

  return (
    <ToggleProvider
      childrenLength={childrenLength}
      toggleValue={toggleValue}
      handleSetToggleValue={handleSetToggleValue}
    >
      <Container>
        {children}
        <ToggleBox
          childrenLength={childrenLength}
          selectedIndex={selectedIndex}
        />
      </Container>
    </ToggleProvider>
  );
};

Toggle.Button = Button;

export default Toggle;
