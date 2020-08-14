import React from 'react';
import HomeScene from './scenes/Home';
import {UserProvider} from './context/UserContext';

const App = () => {
  const user = {name: 'Toperson', loggedIn: true};

  return (
    <>
      <UserProvider value={user}>
        <HomeScene />
      </UserProvider>
    </>
  );
};

export default App;
