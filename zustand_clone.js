// zustandClone.js
import { useState, useEffect } from "react";

export function createStore(storeCreator) {
  let state = storeCreator(set, get); // initial state
  const listeners = new Set(); // subscribed components

  function set(partial) {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    state = { ...state, ...nextState };

    // সব subscribed component কে inform করো
    listeners.forEach((listener) => listener());
  }

  function get() {
    return state;
  }

  function useStore(selector = (s) => s) {
    const [selectedState, setSelectedState] = useState(() => selector(state));

    useEffect(() => {
      function handleChange() {
        const newState = selector(state);
        setSelectedState(newState);
      }

      listeners.add(handleChange);

      // Cleanup
      return () => listeners.delete(handleChange);
    }, []);

    return selectedState;
  }

  return useStore;
}
