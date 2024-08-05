import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { FormEvent, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from 'src/firebase';
import { useCategory } from 'src/store/message';

const Footer = () => {
  const [input, setInput] = useState('');
  const [user, loading] = useAuthState(auth);
  const category = useCategory();

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim().length === 0) return;

    await addDoc(collection(db, `chats/${category}/messages`), {
      text: input,
      sender: user?.email,
      photoURL: user?.photoURL,
      timestamp: serverTimestamp(),
    });

    setInput('');
  };

  return (
    <div className="bg-success sticky">
      <form className="bg-[#EDEDED] flex p-3 gap-2" onSubmit={sendMessage}>
        <input
          className="bg-[#D9D9D9] p-2 flex-grow"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="bg-[#D9D9D9] p-2">
          전송
        </button>
      </form>
    </div>
  );
};

export default Footer;
