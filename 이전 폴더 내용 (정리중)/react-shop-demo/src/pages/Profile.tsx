import { doc, getDoc } from 'firebase/firestore';
import { useCallback, useEffect, useState } from 'react';
import { tags } from 'src/data/tag';
import { auth, db } from 'src/firebase';
import { UserType } from 'src/types/userType';

const Profile = () => {
  const [user, setUser] = useState<UserType>({
    email: '',
    lastActive: null,
    photoURL: '',
    displayName: '',
  });
  const getProfile = useCallback(async () => {
    if (auth.currentUser) {
      const docRef = doc(db, 'users', auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      setUser(docSnap.data() as UserType);
    }
  }, []);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <div className="p-5">
      <div className="flex items-center mb-10">
        <div className="bg-primary w-[150px] h-[150px] rounded-full" />
        <div className="ml-[50px]">
          <div className="text-4xl font-bold mb-3">{user.displayName}</div>
          <div className="text-l mb-1">동국대 서울캠퍼스</div>

          {/* tag */}
          <div className="flex gap-2">
            {tags.map((tag, i) => (
              <div key={i} className="text-l">
                #{tag}
              </div>
            ))}
          </div>
        </div>
      </div>

      <button className="bg-gray-300 w-full px-3 py-3 rounded-lg font-bold mb-[40px]">
        재학생 인증하기 / 프로필 수정하기
      </button>

      <div className="mb-10">
        <p>환경 점수 30pt</p>
        <div className="relative">
          <div className="absolute w-full bg-gray-300 h-5" />
          <div className="absolute w-[40px] bg-green-300 h-5" />
        </div>
      </div>

      <div className="flex gap-20 mb-10">
        <p>누적 거래횟수 0회</p>
        <p>누적 기부횟수 0회</p>
      </div>

      <div className="flex justify-around text-gray-400">
        <div>판매</div>
        <div>구매</div>
        <div>기부</div>
      </div>
    </div>
  );
};

export default Profile;
