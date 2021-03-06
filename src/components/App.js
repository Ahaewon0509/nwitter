import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from 'fbase';
import { computeHeadingLevel } from "@testing-library/react";


function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(user);
        setUserObj({
          uid: user.uid,
          displayName: user.displayName,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObj(false); //유저가 없는 경우 flase
      }
      setInit(true);
    });
  }, []);
  //setInterval(() => console.log(authService.currentUser), 2000);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
      uid: user.uid,
      displayName: user.displayName,
      updateProfile: (args) => user.updateProfile(args),
    });
  };

  return (
    <>
    {init ? (
    <AppRouter
    refreshUser={refreshUser}
    isLoggedIn={Boolean(userObj)} 
    userObj={userObj} 
    /> 
    ):(
      "initializing..."
    )}
    </>
  );
}

export default App;
