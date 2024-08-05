import { ChangeEventHandler, useCallback, useState } from "react";

type Return = readonly [
  string,
  ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
  VoidFunction
];

const useInput = (initialValue = ""): Return => {
  const [state, setState] = useState(initialValue);

  const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> =
    useCallback(({ target }) => {
      const { value } = target;
      setState(value);
    }, []);

  const resetValue = useCallback(() => {
    setState(initialValue);
  }, [initialValue]);

  return [state, onChange, resetValue];
};

export default useInput;
