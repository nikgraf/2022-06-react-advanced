import { useState, useTransition, memo } from "react";
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

const MemoedName = memo(Name);

function App() {
  const [query, setQuery] = useState("");
  const [highlight, setHighlight] = useState("");
  const [isPending, startTransition] = useTransition();

  return (
    <div>
      <input
        onChange={({ target }) => {
          setQuery(() => target.value);
          // setHighlight(target.value);
          startTransition(() => setHighlight(target.value));
        }}
        value={query}
        type="text"
      />
      {isPending ? "calculating" : null}
      {names
        .filter((name) => name.includes(highlight))
        .map((name, i) => (
          <MemoedName key={i} name={name} highlight={highlight} />
        ))}
    </div>
  );
}

export default App;
