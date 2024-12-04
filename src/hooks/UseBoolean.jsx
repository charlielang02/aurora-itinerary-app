import { useState } from 'react';

const useBoolean = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const toggle = () => {
    setValue(prevValue => !prevValue);
  }

  const setTrue = () => {
    setValue(true);
  }

  const setFalse = () => {
    setValue(false);
  }

  return {
    value,
    toggle,
    setTrue,
    setFalse
  };
}

export default useBoolean;