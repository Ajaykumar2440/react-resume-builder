// App.js

import React, { useState } from 'react';
import FormBody from './components/FormBody';
import Login from './components/Login/Login';


const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (credentials) => {
    setLoggedInUser({ username: credentials.username });
  };

  const handleSaveProfile = (profileData) => {
    console.log('Saving profile:', profileData);
  };

  return (
    <div>
      {!loggedInUser ? (
        <Login onLogin={handleLogin} />
      ) : (
        <FormBody user={loggedInUser} onSave={handleSaveProfile} />
      )}
    </div>
  );
};

export default App;


