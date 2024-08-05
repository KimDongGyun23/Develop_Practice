import { Navigate, Route, Routes } from 'react-router-dom';
import Home from 'pages/home';
import PostList from 'pages/posts';
import PostDetail from 'pages/posts/detail';
import PostNew from 'pages/posts/new';
import PostEdit from 'pages/posts/edit';
import ProfilePage from 'pages/profile';
import LoginPage from 'pages/login';
import SignupPage from 'pages/signup';

interface RouterProps {
  isAuthenticated : boolean;
}

const Router = ({ isAuthenticated } : RouterProps) => {

  return (
    <Routes>
      {
        isAuthenticated ? (
          <>
            <Route path='/' element={<Home />} />
            <Route path='/posts' element={<PostList />} />
            <Route path='/posts/:id' element={<PostDetail />} />
            <Route path='/posts/new' element={<PostNew />} />
            <Route path='/posts/edit/:id' element={<PostEdit />} />
            <Route path='/profile' element={<ProfilePage />} />
      
            {/* default 페이지 정의 가능, 이외의 url 접속 시 홈으로 강제 이동 */}
            <Route path="*" element={<Navigate replace to='/' />} />
          </>
        ) : (
          <>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />

            {/* 기본 path, 모든 path에 대해서 loginpath만 보이도록 */}
            <Route path="*" element={<LoginPage />} />
          </>
        )
      }

    </Routes>
  )
}

export default Router