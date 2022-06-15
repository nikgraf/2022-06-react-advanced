import { useEffect, useState } from "react";

const SomeComponent: React.FC<{}> = () => {
  console.log("SomeComponent render");
  useEffect(() => {
    console.log("SomeComponent Effect");
  });

  return <div>Some</div>;
};

function App() {
  const [counter, setCounter] = useState(3);

  console.log("App render");
  useEffect(() => {
    console.log("App Effect");
  });

  return (
    <div>
      <h1>Hello World</h1>
      {counter}
      <button
        onClick={() => {
          setCounter((prevCounter) => prevCounter + 1);
        }}
      >
        +1
      </button>
      {counter % 3 === 0 ? <SomeComponent /> : null}
    </div>
  );
}

export default App;
