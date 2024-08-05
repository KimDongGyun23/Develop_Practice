import { useMessageActions } from 'src/store/message';

const Header = () => {
  const { setCategoryToChatting, setCategoryToChanging, setCategoryToUpCycle } =
    useMessageActions();

  return (
    <div className="bg-success flex justify-around text-center w-full">
      <div
        className="w-full py-3 border border-failure"
        onClick={setCategoryToChatting}
      >
        소통
      </div>
      <div
        className="w-full py-3 border border-failure"
        onClick={setCategoryToChanging}
      >
        물물교환
      </div>
      <div
        className="w-full py-3 border border-failure"
        onClick={setCategoryToUpCycle}
      >
        업사이클 / 기부
      </div>
    </div>
  );
};

export default Header;
