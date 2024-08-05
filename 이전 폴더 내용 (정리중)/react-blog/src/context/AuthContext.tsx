import { User, getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from 'firebaseApp';
import React, { ReactNode, createContext, useEffect, useState } from 'react'

interface AuthProps {
  children : ReactNode;
}

const AuthContext = createContext({
  user : null as User | null,
});

// context provider
// 컨텍스트를 구독하는 컴포넌트들의 컨텍스트 변화를 알려주는 기능..?

export const AuthContextProvider = ({children} : AuthProps) => {

  const auth = getAuth(app);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if(user) {
        setCurrentUser(user);
      }
      else {
        setCurrentUser(user);
      }
    });
  },[auth])

  return (
    <AuthContext.Provider value={{user : currentUser}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
