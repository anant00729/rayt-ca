import { useCallback, useReducer, useRef } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'set':
      return { ...state, [action.key]: action.value };
    case 'reset':
      return { ...action.defaults };
    default:
      return state;
  }
}

export default function useSettings(initial) {
  const defaultsRef = useRef(initial);
  const [settings, dispatch] = useReducer(reducer, initial, (d) => ({ ...d }));

  const update = useCallback((key, value) => {
    dispatch({ type: 'set', key, value });
  }, []);

  const reset = useCallback(() => {
    dispatch({ type: 'reset', defaults: defaultsRef.current });
  }, []);

  return { settings, update, reset };
}
