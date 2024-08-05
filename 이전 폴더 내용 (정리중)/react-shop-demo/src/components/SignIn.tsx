import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from 'src/firebase';

export type fomrDataType = {
  email: string;
  pw: string;
  pwConfirm?: string;
};

const Signin = () => {
  const [formData, setFormData] = useState<fomrDataType>({
    email: '',
    pw: '',
    pwConfirm: '',
  });

  const navigate = useNavigate();

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.pw);
      navigate('/');
    } catch (error: any) {
      console.log(error);
    }
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

      <label htmlFor="pw" className="mt-10">
        password
      </label>
      <input
        type="password"
        value={formData.pw}
        name="pw"
        onChange={onChange}
      />

      <label htmlFor="pwConfirm" className="mt-10">
        password 확인
      </label>
      <input
        type="password"
        value={formData.pwConfirm}
        name="pwConfirm"
        onChange={onChange}
      />

      <button type="submit" className="mt-10 bg-success">
        회원가입
      </button>
    </form>
  );
};

export default Signin;
