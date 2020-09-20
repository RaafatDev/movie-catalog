import { useState, useEffect } from "react";

type ReturnType<T> = [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>
];

export const useLocalSession = <T,>(
  key: string,
  initialValue?: T
): ReturnType<T> => {
  const [state, setState] = useState<T | undefined>(() => {
    // fist we check if we don't have an initialValue then we don't want to set an initialValue

    //* we disabled this return so that i can avoid set the state from the localStorage!
    // if (!initialValue) return;

    try {
      // if the localStorage contains the key that we sent in the localStorage value .. other wise we sent the initialValue
      const value = localStorage.getItem(key);

      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      // if we get an Error, we send the initialValue
      return initialValue;
    }
  });

  useEffect(() => {
    //
    // if we don't set an initialState .. then we will not have a state !
    // if we don't do this check .. then we will write undefined in the localStorage ..
    // and we don't want that!
    if (state) {
      try {
        localStorage.setItem(key, JSON.stringify(state));
      } catch (error) {
        console.log("error: ", error);
      }
    }
  }, [state, key]);

  return [state, setState];
};
