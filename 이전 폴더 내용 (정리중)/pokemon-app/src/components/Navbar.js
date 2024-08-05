import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from 'firebase/auth'
import app from "../firebase";

const Nav = styled.nav`
  position : fixed;
  top : 0;
  left : 0;
  right : 0;
  height : 4rem;
  display : flex;
  justify-content : space-between;
  align-items : center;
  padding : 0 2rem;
  letter-spacing : 1rem;
  z-index : 9999;
  background-color : ${props => props.show ? "#69778b" : "transparent"};
`;

const Logo = styled.a`
  padding : 0;
  width : 3rem;
  
  img{
    width : 100%;
    cursor : pointer;
  }
`;

const Login = styled.a`
  backgroundn-color : rgba(0,0,0,0.6);
  padding : 0.5rem 1rem;
  text-transform : uppercase;
  letter-spacing : 1.5px;
  border : 1px solid #283549;
  border-radius : 0.25rem;
  transition : all 0.2s ease 0s;
  color : #283549;

  &:hover{
    background-color : #f9f9f9;
    color : #000;
    border-color : transparent;
  }
`;

const UserImg = styled.img`
  border-radius : 50%;
  width : 100%;
  height : 100%;
`;

const DropDown = styled.div`
  position : absolute;
  top : 3rem;
  right : 0;
  background : rgb(19, 19, 19);
  border : 1px solid rgba(151,151,151, 0.34);
  border-radius : 4px;
  box-shadow : rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding : 1rem;
  letter-spacing : 3px;
  width : 6rem;
  opacity : 0;
  color : white;
`;

const SighnOut = styled.div`
  position : relative;
  height : 3rem;
  width : 3rem;
  display : flex;
  cursor : pointer;
  align-items : center;
  justify-content : center;

  &:hover{
    ${DropDown} {
      opacity : 1;
      transition-duration : 0.5s;
    }
  }
`;

const Navbar = () => {
  const initialUserData = localStorage.getItem("userData") 
    ? JSON.parse(localStorage.getItem("userData")) : {};

  const [show, setShow] = useState(false);
  const {pathname} = useLocation();
  const [userData, setUserData] = useState(initialUserData);

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const handleAuth = ()=>{
    signInWithPopup(auth, provider)
      .then((result)=>{
        setUserData(result.user);
        localStorage.setItem('userData',JSON.stringify(result.user))
      })
      .catch(error=>{
        console.error(error);
      })
  }

  const listener = ()=>{
    if(window.scrollY > 50){
      setShow(true);
    } else{
      setShow(false);
    }
  }

  const handleLogOut = ()=>{
    signOut(auth).then(()=>{
      setUserData({});
      navigate('/');
    }).catch((error)=>{
      alert(error.message);
    })
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
      if(!user){
        navigate("/login");        
      }
      else if (user && pathname === '/login'){
        navigate("/");
      }
    })
    return ()=>{unsubscribe();}
  }, [pathname])

  useEffect(()=>{
    window.addEventListener("scroll", listener);
    return()=>{window.removeEventListener("scroll",listener)};
  }, []);


  return (
    <Nav show={show}>
      <Logo>
        <img
          alt="Poke Logo"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
          onClick={()=>window.location.href='/'}
        />
      </Logo>
      {pathname === '/login' ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <SighnOut>
          <UserImg src={userData.photoURL} alt={userData.displayName} />
          <DropDown>
            <span onClick={handleLogOut}>Sign Out</span>
          </DropDown>
        </SighnOut>
      )}
    </Nav>
  )
}

export default Navbar