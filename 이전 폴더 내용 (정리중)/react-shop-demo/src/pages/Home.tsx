import Login from '@components/Login';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from 'src/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

const Home = () => {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      setDoc(
        doc(db, 'users', user.uid),
        {
          email: user.email,
          lastActive: serverTimestamp(),
          photoURL: user.photoURL,
          displayName: user.email?.substring(0, user.email?.indexOf('@')),
        },
        { merge: true }
      );
    }
  }, [user]);

  if (loading) {
    return <div>"..loading"</div>;
  }

  if (!user) {
    return <Login />;
  }

  return (
    <div className="flex flex-col gap-3">
      <Link to={'./community'} className="p-2 bg-success font-bold text-2xl">
        <button>community</button>
      </Link>
      <Link to={'./store'} className="p-2 bg-success font-bold text-2xl">
        <button>store</button>
      </Link>
      <Link to={'./profile'} className="p-2 bg-success font-bold text-2xl">
        <button>profile</button>
      </Link>
      <Link to={'./login'} className="p-2 bg-success font-bold text-2xl">
        <button>login</button>
      </Link>
      <Link to={'./signin'} className="p-2 bg-success font-bold text-2xl">
        <button>SignIn</button>
      </Link>
    </div>
  );
};

export default Home;
