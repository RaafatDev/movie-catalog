import { useState, useEffect } from "react";

// interface Props {}
// const useLocalStorage = (key: any, initialValue: any) => {
const useLocalStorage = (key: any, initialValue: any) => {
  // console.log({ key });
  // console.log({ initialValue });

  // const useLocalStorage = (key: string, initialValue: any) => {
  const [local, setLocal] = useState(() => {
    try {
      return JSON.parse(
        window.localStorage.getItem(key) || JSON.stringify(initialValue)
      );
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(local));
  }, [local]);

  return [local, setLocal];
};

export default useLocalStorage;
