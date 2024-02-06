import UserForm from "./UserForm";
import {useState} from "react";
import UserList from "./UserList"
function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return <div>
    <UserForm onUserAdd={addUser}/>
    <hr />
    <UserList users={users} />
  </div>
}

export default App;
