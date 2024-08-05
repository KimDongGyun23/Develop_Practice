import { collection, orderBy, query } from 'firebase/firestore';
import { auth, db } from 'src/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Message from '@components/Message';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect, useRef } from 'react';
import { IMessage } from 'src/types/message';
import { useCategory } from 'src/store/message';

const Body = () => {
  const category = useCategory();

  const q = query(
    collection(db, 'chats', category, 'messages'),
    orderBy('timestamp')
  );
  const [messages, loading] = useCollectionData(q);
  const [user] = useAuthState(auth);
  const bottomOfChat = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    bottomOfChat.current?.scrollIntoView({
      behavior: 'auto',
      block: 'start',
    });
  }, [messages]);

  return (
    <div className="w-full h-full flex-grow p-3 overflow-y-scroll no-scrollbar">
      <div className="flex">
        <div className="w-full flex flex-col gap-3 m-3">
          {messages?.map((msg, index) => (
            <Message user={user!} message={msg as IMessage} key={index} />
          ))}
        </div>
      </div>
      <div ref={bottomOfChat} />
    </div>
  );
};

export default Body;
