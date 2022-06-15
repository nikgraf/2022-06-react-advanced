import { useState } from "react";
import { faker } from "@faker-js/faker";

type NameProps = {
  name: string;
  highlight: string;
};

export const names = Array.from(Array(10000), () => {
  return faker.name.findName();
});

const Name: React.FC<NameProps> = ({ name, highlight }) => {
  const index = name.toLowerCase().indexOf(highlight.toLowerCase());
  return (
    <div>
      {name.slice(0, index)}
      <span style={{ background: "yellow" }}>
        {name.slice(index, index + highlight.length)}
      </span>
      {name.slice(index + highlight.length)}
    </div>
  );
};

function App() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        onChange={({ target }) => {
          setQuery(() => target.value);
        }}
        value={query}
        type="text"
      />
      {names
        .filter((name) => name.includes(query))
        .map((name, i) => (
          <Name key={i} name={name} highlight={query} />
        ))}
    </div>
  );
}

export default App;
