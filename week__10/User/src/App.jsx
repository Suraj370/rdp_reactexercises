import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import users from "./data";
import UserList from "./components/UserList";
function App() {
  const [userdata, setUsers] = useState([]);

  useEffect(() => {
    setUsers(users);
  }, []);

  return (
    <>
      <div>
        <UserList users={userdata} />
       </div>
    </>
  );
}

export default App;
