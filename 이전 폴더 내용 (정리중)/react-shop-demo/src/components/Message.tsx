'use client';
import { User } from 'firebase/auth';
import { IMessage } from 'src/types/message';

interface IMessageBubbleProps {
  user: User;
  message: IMessage;
}

export default function Message({ user, message }: IMessageBubbleProps) {
  const sender = message.sender === user?.email;

  return (
    <>
      <div className={!sender ? `flex justify-start` : `flex justify-end`}>
        {!sender && (
          <div className="mr-3">
            <div className="w-10 h-10 bg-white rounded-full" />
          </div>
        )}
        <div>
          {!sender && <div className="text-md font-bold">{message.sender}</div>}

          <div
            className={
              !sender
                ? `bg-[#D9D9D9] py-3 px-4 rounded-lg rounded-tl-none my-1 text-sm w-auto max-w-lg`
                : `bg-[#EDEDED]  py-3 px-4 rounded-lg rounded-br-none my-1 text-sm w-auto max-w-lg`
            }
          >
            {message.text}
          </div>
        </div>
      </div>
    </>
  );
}
