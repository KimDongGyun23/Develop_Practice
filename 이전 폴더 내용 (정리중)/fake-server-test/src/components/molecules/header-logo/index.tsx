import BoxHeader from "@components/atoms/box-header";
import BoxIcon from "@components/atoms/box-icon";
import { IoMdNotificationsOutline } from "react-icons/io";

const HeaderLogo = () => {
  return (
    <BoxHeader>
      <BoxIcon />
      <div>
        <img width={100} src="/src/assets/logo.png" alt="logo" />
      </div>
      <BoxIcon>
        <IoMdNotificationsOutline />
      </BoxIcon>
    </BoxHeader>
  );
};

export default HeaderLogo;
