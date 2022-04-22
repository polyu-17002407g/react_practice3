import { useContext } from "react";
import { Card } from "./components/Card";

import { AdminFlagContext } from "./components/providers/AdminFlagProvider";

export const App = () => {
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);

  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      {isAdmin ? <span>Administrator</span> : <span>Not administrator</span>}
      <button onClick={onClickSwitch}>Switch</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
};
