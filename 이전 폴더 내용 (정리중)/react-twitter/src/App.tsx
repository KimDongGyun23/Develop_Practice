import Layout from 'components/Layout';
import Router from 'components/Router';
import Loader from 'components/loader/Loader';

import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from 'firebaseApp'
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { RecoilRoot } from 'recoil';

function App() {
  const auth = getAuth(app);

  const [init, setInit] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }

      setInit(true);
    })
  },[auth])

  return (
    <RecoilRoot>
      <Layout>
        <ToastContainer 
          theme='dark' // 테마 어둡게
          autoClose={1000} // 1초 뒤 닫힘
          hideProgressBar // progressbar 없앰
          newestOnTop // 최신 것이 위로 올라가도록
        />
        {init ? <Router isAuthenticated={isAuthenticated} /> : <Loader />}
      </Layout>
    </RecoilRoot>
  );
}

export default App;
