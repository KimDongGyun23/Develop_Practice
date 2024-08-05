import * as S from "./style";
import ImgChatting from "src/assets/nav-imgs/ImgChatting";
import ImgDonations from "src/assets/nav-imgs/ImgDonations";
import ImgHome from "src/assets/nav-imgs/ImgHome";
import ImgMagazine from "src/assets/nav-imgs/ImgMagazine";
import ImgProfile from "src/assets/nav-imgs/ImgProfile";

const Nav = () => {
  return (
    <S.BoxNav>
      <S.BoxItem>
        <ImgHome />
        <p>홈</p>
      </S.BoxItem>

      <S.BoxItem>
        <ImgDonations />
        <p>기부</p>
      </S.BoxItem>

      <S.BoxItem>
        <ImgMagazine />
        <p>매거진</p>
      </S.BoxItem>

      <S.BoxItem>
        <ImgChatting />
        <p>채팅</p>
      </S.BoxItem>

      <S.BoxItem>
        <ImgProfile />
        <p>마이페이지</p>
      </S.BoxItem>
    </S.BoxNav>
  );
};

export default Nav;
