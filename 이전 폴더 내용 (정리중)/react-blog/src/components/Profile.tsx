import AuthContext from 'context/AuthContext';
import { getAuth, signOut } from 'firebase/auth'
import { app } from 'firebaseApp';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';

const onSignOut = async () => {
  try {
    const auth = getAuth(app);
    await signOut(auth);
    toast.success("로그아웃 되었습니다.");
  } 
  catch (error : any) {
    console.log(error);
    toast.error(error?.code);
  }
}

const Profile = () => {
  // const auth = getAuth(app);
  const { user } = useContext(AuthContext);

  return (
    <div className='profile__box'>
      <div className='flex__box--lg'>
        <div className='profile__image' />
        <div>
          {/* <div className='profile__email'>{auth?.currentUser?.email}</div> */}
          {/* <div className='profile__nname'>{auth?.currentUser?.displayName || "사용자"}</div> */}

          {/* ContextAPI 사용 */}
          <div className='profile__email'>{user?.email}</div>
          <div className='profile__nname'>{user?.displayName || "사용자"}</div>
        </div>
      </div>
      <div 
        role='presentation' 
        className='profile__logout'
        onClick={onSignOut}
      >
        로그아웃
      </div>
    </div>
  )
}

export default Profile