import { useCallback } from "react";
import debounce from "lodash.debounce";

function useDebounce(cb, delay) {
  const debounced = useCallback(
    debounce((...args) => cb(...args), delay),[delay]);
  return debounced;
}

export default useDebounce