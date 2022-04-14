import { useState } from "react";
import { Card } from "./components/Card";

export const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      {isAdmin ? <span>Administrator</span> : <span>Not administrator</span>}
      <button onClick={onClickSwitch}>Switch</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
};
