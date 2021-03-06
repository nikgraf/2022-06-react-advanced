import { useDeferredValue, useEffect, useState } from "react";

const SlowUI = () => (
  <>
    {Array(50000)
      .fill(1)
      .map((_, index) => (
        <span key={index}>{100000} </span>
      ))}
  </>
);

function App() {
  const [value, setValue] = useState(0);
  const deferredValue = useDeferredValue(value);

  const isPendingValue = deferredValue !== value;

  useEffect(() => {
    console.log(value, deferredValue);
  });

  return (
    <>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => {
            setValue((prevValue) => prevValue + 1);
          }}
        >
          {value}
        </button>
        {isPendingValue ? <div>{"pending"}</div> : null}
      </div>
      <div>DeferredValue: {deferredValue}</div>
      <div>
        <SlowUI />
      </div>
    </>
  );
}

export default App;
