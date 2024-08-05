import { Outlet, Route, Routes } from 'react-router-dom'
import './reset.css'
import MainPage from './pages/MainPage'
import DetailPage from './pages/DetailPage'
import LoginPage from './pages/LoginPage'
import Navbar from './components/Navbar'

const Layout = () => {
  return(
    <>
      <Navbar />
      <div style={{height : "4rem"}}/>
      <Outlet />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/pokemon/:id" element={<DetailPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  )
}

export default App