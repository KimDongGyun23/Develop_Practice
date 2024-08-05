import * as S from "./style";
import FormGroupTrade from "@components/atoms/form-group-trade";
import BoxInputTrade from "@components/molecules/box-input-trade";
import ListPrice from "@components/molecules/list-trade";
import ListTag from "@components/molecules/list-tag";
import Button from "@components/atoms/button";
import { ChangeEvent, useState } from "react";
import { RiImageAddLine } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";
import InputRadio from "@components/molecules/input-radio";
import { categories } from "src/data/categories";
import Tag from "@components/atoms/tag";
import axios from "axios";

const priceList = ["+1,000원", "+3,000원", "+5,000원", "+10,000원"];
const placeList = ["정문", "올레사거리", "후문", "혜화역"];

interface FormDataType {
  imgs: FileList;
  // imgs: string[];
  title: string;
  category: string;
  state: string;
  description: string;
  price: string;
  place: string;
}

const FormTradeNew = () => {
  const [showImages, setShowImages] = useState<string[]>([]);
  const [formData, setFormData] = useState<FormDataType>({
    imgs: {} as FileList,
    // imgs: [],
    title: "",
    category: "",
    state: "",
    description: "",
    price: "",
    place: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = event.target?.result;
      setFormData({ ...formData, imgs: base64String });
    };

    reader.readAsDataURL(file);
  };

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | null>
  ) => {
    const { name, value } = e.target;
    const files = (e.target as HTMLInputElement).files as FileList;

    if (name === "imgs") {
      if (files) {
        const imageLists = files;
        let imageUrlLists = [...showImages];
        for (let i = 0; i < imageLists.length; i++) {
          const currentImageUrl = URL.createObjectURL(imageLists[i]);
          imageUrlLists.push(currentImageUrl);
        }
        if (imageUrlLists.length > 5) {
          imageUrlLists = imageUrlLists.slice(0, 5);
        }
        setShowImages(imageUrlLists);
        setFormData({ ...formData, imgs: files });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formDataObj = new FormData();
    //   (...formData.imgs).forEach(image => {
    //     formData.append('files', image);
    // });

    Array.from(formData.imgs).forEach((el) => {
      formDataObj.append("imgs", el);
    });

    formDataObj.append("title", formData.title);
    formDataObj.append("category", formData.category);
    formDataObj.append("state", formData.state);
    formDataObj.append("description", formData.description);
    formDataObj.append("price", formData.price);

    console.log(...formDataObj);

    await axios({
      method: "post",
      headers: { "Content-type": "multipart/form-data" },
      // url: "https://jsonplaceholder.typicode.com/posts",
      url: "http://localhost:4000/products",
      data: formDataObj,
    }).then((result) => {
      console.log("요청성공");
      console.log(result);
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <FormGroupTrade>
        <h4>이미지 업로드</h4>
        <S.ListImage>
          <S.Label htmlFor="img">
            <RiImageAddLine />
          </S.Label>
          <S.InputFile
            type="file"
            id="img"
            name="imgs"
            accept="image/*"
            multiple
            onChange={onChange}
          />
          {showImages.map((img, id) => (
            <S.BoxImage key={id}>
              <img src={img} alt={`${img}-${id}`} />
              <IoIosCloseCircle />
            </S.BoxImage>
          ))}
        </S.ListImage>
      </FormGroupTrade>

      <FormGroupTrade>
        <h4>제목</h4>
        <BoxInputTrade>
          <input
            name="title"
            onChange={onChange}
            placeholder="제목을 입력해주세요."
          />
        </BoxInputTrade>
      </FormGroupTrade>

      <FormGroupTrade>
        <h4>분류</h4>
        <S.ListCategory>
          {categories.map((category, index) => (
            <div
              onClick={() => {
                if (category) {
                  setFormData({
                    ...formData,
                    category,
                  });
                }
              }}
              key={index}
            >
              {category}
            </div>
          ))}
        </S.ListCategory>
      </FormGroupTrade>

      <FormGroupTrade>
        <h4>상품 상태</h4>
        <S.SectionRadio>
          <div>
            <input
              type="radio"
              id="very-good"
              name="state"
              onChange={onChange}
              value="very-good"
            />
            <label htmlFor="very-good">아주 좋아요</label>
          </div>

          <div>
            <input
              type="radio"
              id="good"
              name="state"
              onChange={onChange}
              value="good"
            />
            <label htmlFor="good">좋아요</label>
          </div>

          <div>
            <input
              type="radio"
              id="normal"
              name="state"
              onChange={onChange}
              value="normal"
            />
            <label htmlFor="normal">보통이에요</label>
          </div>

          <div>
            <input
              type="radio"
              id="used"
              name="state"
              onChange={onChange}
              value="used"
            />
            <label htmlFor="used">사용감 있어요</label>
          </div>
        </S.SectionRadio>
      </FormGroupTrade>

      <FormGroupTrade>
        <h4>상품 설명</h4>
        <S.TextArea
          name="description"
          onChange={onChange}
          placeholder="상품에 대한 설명을 써주세요."
        />
      </FormGroupTrade>

      <FormGroupTrade>
        <h4>판매 가격</h4>
        <S.InputNum size="164px">
          <input name="price" value={formData.price} onChange={onChange} />
          <p>원</p>
        </S.InputNum>
        <ListPrice list={priceList} />
      </FormGroupTrade>

      <FormGroupTrade>
        <h4>거래 장소</h4>
        <BoxInputTrade>
          <input
            name="place"
            onChange={onChange}
            placeholder="위치를 입력해주세요."
          />
        </BoxInputTrade>
        <S.LabelPlace>성균관 대학교 추천 장소</S.LabelPlace>
        <ListPrice list={placeList} />
      </FormGroupTrade>

      <Button color={"primary"}>
        <S.TextSubmit>등록하기</S.TextSubmit>
      </Button>
    </form>
  );
};

export default FormTradeNew;
