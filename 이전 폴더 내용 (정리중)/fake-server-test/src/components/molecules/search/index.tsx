import BoxIcon from "@components/atoms/box-icon";
import { IoIosSearch, IoMdCloseCircle } from "react-icons/io";
import BoxInput from "@components/atoms/box-input";

const Search = () => {
  return (
    <BoxInput>
      <BoxIcon>
        <IoIosSearch />
      </BoxIcon>

      <input placeholder="무엇이든 검색해보세요." />

      <BoxIcon>
        <IoMdCloseCircle />
      </BoxIcon>
    </BoxInput>
  );
};

export default Search;
