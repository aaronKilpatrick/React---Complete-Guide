import React, { useState } from 'react';

import AddUser from './components/AddUser';
import UserList from './components/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userData) => {
    setUsersList((currentUsersList) => [...currentUsersList, userData]);
  };

  return (
    <div>
      <AddUser addNewUser={addUserHandler} />

      {usersList.length > 0 && <UserList usersList={usersList} />}
    </div>
  );
}

export default App;
