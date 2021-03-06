import { useId } from "react";

type Props = {
  children: React.ReactNode;
};

// https://reactjs.org/docs/hooks-reference.html#useid
const Checkbox: React.FC<Props> = ({ children }) => {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input id={id} type="checkbox" name="react" />
    </>
  );
};

export default Checkbox;
