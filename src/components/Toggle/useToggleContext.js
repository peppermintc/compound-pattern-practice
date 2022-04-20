import { createContext, useContext } from 'react';

const ToggleContext = createContext(undefined);

const ToggleProvider = ({
  children,
  childrenLength,
  toggleValue,
  handleSetToggleValue,
}) => {
  return (
    <ToggleContext.Provider
      value={{
        childrenLength,
        toggleValue,
        handleSetToggleValue,
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
