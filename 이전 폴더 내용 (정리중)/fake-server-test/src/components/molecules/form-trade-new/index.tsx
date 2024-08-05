import Input from "@components/atoms/box-input";
import * as S from "./style";
import { ChangeEvent, useState } from "react";

const FormTradeNew = () => {
  const [showImgs, setShowImgs] = useState<string[]>([]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const imgLists = e.target.files;
      let imgUrlLists = [...showImgs];

      for (let i = 0; i < imgLists.length; i++) {
        const currentImgUrl = URL.createObjectURL(imgLists[i]);
        imgUrlLists.push(currentImgUrl);
      }

      if (imgUrlLists.length > 10) {
        imgUrlLists = imgUrlLists.slice(0, 10);
      }

      setShowImgs(imgUrlLists);
    }
  };

  return (
    <S.Form>
      <div className="form-group">
        <S.TextArea
          placeholder="상품설명: &#13;&#10;OO에서 OO원에 구매했어요.&#13;&#10;작년 여름에 사서 O회 착용했습니다.&#13;&#10;OOcm OOkg인데 딱 맞았어요."
        />
      </div>

      <S.GroupFlex className="form-group">
        <label htmlFor="img">이미지 업로드</label>
        <input type="file" id="img" accept="image/*" onChange={onChange} />
      </S.GroupFlex>

      {showImgs.map((img, id) => (
        <div key={id}>
          <img src={img} alt={`${img}-${id}`} />
        </div>
      ))}

      <S.GroupFlex reverse="row-reverse">
        <S.BtnUpload>판매등록</S.BtnUpload>
      </S.GroupFlex>
    </S.Form>
  );
};

export default FormTradeNew;
