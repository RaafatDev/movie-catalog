import { useState, useEffect } from "react";

const useSessionStorage = (key: any, initialValue: any) => {
  //
  const [local, setLocal] = useState(() => {
    try {
      return JSON.parse(
        // window.localStorage.getItem(key) || JSON.stringify(initialValue)
        //*
        window.sessionStorage.getItem(key) || JSON.stringify(initialValue)
      );
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    // window.localStorage.setItem(key, JSON.stringify(local));
    //*
    window.sessionStorage.setItem(key, JSON.stringify(local));
  }, [local]);

  return [local, setLocal];
};

export default useSessionStorage;
