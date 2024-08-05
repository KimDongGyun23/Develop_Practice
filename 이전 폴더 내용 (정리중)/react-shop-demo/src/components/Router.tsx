import Community from '@pages/community/Community';
import Home from '@pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signin from './Signin';
import Store from '@pages/store/Store';
import Profile from '@pages/Profile';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/community" element={<Community />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/store" element={<Store />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default Router;
