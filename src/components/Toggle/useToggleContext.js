import _ from 'lodash';
import { createContext, useContext, useEffect, useState } from 'react';

const ToggleContext = createContext(undefined);

const ToggleProvider = ({ children }) => {
  const [labels, setLabels] = useState([]);
  const [labelsLength, setLabelsLength] = useState();
  const [currentValue, setCurrentValue] = useState();
  const [currentIndex, setCurrentIndex] = useState();

  useEffect(() => {
    const setInitialState = () => {
      const buttons = children.props.children[0];
      const labels = _.map(buttons, (button) => button.props.label);
      setLabels(labels);
      setLabelsLength(labels.length);

      const firstButtonLabel = children.props.children[0][0].props.label;
      const firstButtonIndex = 0;
      setCurrentValue(firstButtonLabel);
      setCurrentIndex(firstButtonIndex);
    };

    setInitialState();
  }, [children]);

  useEffect(() => {
    const newCurrentIndex = _.findIndex(
      labels,
      (label) => label === currentValue,
    );

    setCurrentIndex(newCurrentIndex);
  }, [labels, currentValue]);

  return (
    <ToggleContext.Provider
      value={{
        labelsLength,
        currentValue,
        currentIndex,
        setCurrentValue,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

const useToggleContext = () => {
  const context = useContext(ToggleContext);

  if (context === undefined) {
    throw new Error('useToggleContext must be used within a ToggleProvider');
  }

  return context;
};

export { ToggleProvider, useToggleContext };
