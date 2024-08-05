import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from 'src/firebase';
import { fomrDataType } from './Signin';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<fomrDataType>({ email: '', pw: '' });

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.pw);
      console.log('로그인 성공');
      navigate('/');
    } catch (error: any) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form className="flex flex-col" onSubmit={onSubmit}>
      <label htmlFor="email" className="mt-10">
        email
      </label>
      <input
        type="email"
        value={formData.email}
        name="email"
        onChange={onChange}
      />

      <label htmlFor="password" className="mt-10">
        password
      </label>
      <input
        type="password"
        value={formData.pw}
        name="pw"
        onChange={onChange}
      />

      <button type="submit" className="mt-10 bg-success">
        로그인
      </button>
    </form>
  );
};

export default Login;
