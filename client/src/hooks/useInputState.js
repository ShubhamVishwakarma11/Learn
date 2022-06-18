import {useState} from 'react';

export default function useInputState(initialVal) {
    const [value, setValue] = useState(initialVal);
    const handleValue = (e) => {
        setValue(e.target.value);
    }
    const resetValue = () => {
        setValue("");
    }
  return [value, handleValue, resetValue];
}
