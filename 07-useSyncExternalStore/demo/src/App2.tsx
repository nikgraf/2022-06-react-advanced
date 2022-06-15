import { useState, useEffect, useCallback } from "react";

// library code

type Listener = () => void;

const createStore = <State,>(initialState: State) => {
  let state: State = initialState;
  const getState = () => state;
  const listeners = new Set<Listener>();
  const setState = (fn: (state: State) => State) => {
    state = fn(state);
    listeners.forEach((l) => l());
  };
  const subscribe = (listener: Listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  return { getState, setState, subscribe };
};

const useStore = (store: any, selector: any) => {
  const [state, setState] = useState(() => selector(store.getState()));
  useEffect(() => {
    const callback = () => setState(selector(store.getState()));
    const unsubscribe = store.subscribe(callback);
    callback();
    return unsubscribe;
  }, [store, selector]);
  return state;
};

//Application code

const store = createStore({ count: 0, text: "hello" });

const Counter = () => {
  const count = useStore(
    store,
    useCallback((state: any) => state.count, [])
  );
  const inc = () => {
    store.setState((prev) => ({ ...prev, count: prev.count + 1 }));
  };
  return (
    <div>
      {count} <button onClick={inc}>+1</button>
    </div>
  );
};

const TextBox = () => {
  const text = useStore(
    store,
    useCallback((state: any) => state.text, [])
  );
  return (
    <div>
      <input
        value={text}
        onChange={(event) => {
          store.setState((prev) => ({ ...prev, text: event.target.value }));
        }}
        className="full-width"
      />
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <Counter />
      <Counter />
      <TextBox />
      <TextBox />
    </div>
  );
};

export default App;
