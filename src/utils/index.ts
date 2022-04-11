/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

/**
 * Created by liuxiaoming on 2022-03-19
 * @param {*} params
 * @returns exchange url to example ->  name=xx&id=xx
 */
export const createUrlParams = (params: any) => {
  const param = { ...params };
  Object.keys(param).forEach((key) => {
    if (param[key] !== 0 && !param[key]) {
      delete param[key];
    }
  });
  return param;
};

/**
 *
 * @param {*} callback
 */
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useDebounce = <T>(params: T, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(params);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(params);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [params]);

  return debounceValue;
};
