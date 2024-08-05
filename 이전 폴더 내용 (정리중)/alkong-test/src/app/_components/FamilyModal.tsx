"use client";

import { useRouter } from "next/navigation";

const family = ["가나다", "마바사", "아자차", "카타하"];

const FamilyModal = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <div className="absolute top-0 w-full h-full left-0 right-0 flex items-end">
      <div
        className="absolute top-0 bg-gray-300 opacity-80 w-full h-svh left-0 right-0 "
        onClick={handleClick}
      />
      <div
        className="absolute top-5 left-5 cursor-pointer z-10"
        onClick={handleClick}
      >
        X
      </div>
      <div className="w-full grid grid-cols-3 justify-evenly gap-y-6 pb-[116px] z-10">
        {family.map((el) => (
          <div key={el} className="flexColumnAlign">
            <div>{el}</div>
            <div className="bg-white w-16 h-16 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FamilyModal;
