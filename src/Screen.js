import React, { useContext } from 'react';
import Header from "./Header";
import { UserContext } from "./context";

const Screen = () => {
  const { logUserIn, user: { loggedIn } } = useContext(UserContext);
  return (
    <div>
      <Header/>
      <h1>First screen</h1>
      <button onClick={ logUserIn }>{loggedIn ? 'Logout' : 'Log user in'}</button>
    </div>
  );
};

export default Screen;