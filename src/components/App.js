import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from 'fbase';
import { computeHeadingLevel } from "@testing-library/react";


function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(user);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  //setInterval(() => console.log(authService.currentUser), 2000);

  const refreshUser = () => {
    setUserObj(authService.currentUser);
  };

  return (
    <>
    {init ? (
    <AppRouter
    refreshUser={refreshUser}
    isLoggedIn={isLoggedIn} 
    userObj={userObj} 
    /> 
    ):(
      "initializing..."
    )}
    </>
  );
}

export default App;
