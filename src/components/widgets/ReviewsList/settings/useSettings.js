import { useCallback, useReducer, useRef } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'set':
      return { ...state, [action.key]: action.value };
    case 'reset':
      return { ...action.defaults };
    case 'replace':
      return { ...action.next };
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

  const replace = useCallback((next) => {
    defaultsRef.current = next;
    dispatch({ type: 'replace', next });
  }, []);

  return { settings, update, reset, replace };
}
