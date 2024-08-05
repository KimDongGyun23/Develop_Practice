import { ListGroup } from "@/app/_components/listGroup";
import dayjs from "dayjs";

const TAG_LIST = ["무릎 시림", "멍", "기타"];

const page = () => {
  const today = dayjs().format("YYYY년 MM월 DD일");
  return (
    <div className="flexColumn gap-8">
      <ListGroup>
        <ListGroup.Label>진료 과목</ListGroup.Label>
        <ListGroup.Tags list={TAG_LIST} />
      </ListGroup>

      <ListGroup>
        <ListGroup.Label>방문 날짜</ListGroup.Label>
        <ListGroup.ItemContainer>
          <input className="bg-transparent outline-none" placeholder={today} />
        </ListGroup.ItemContainer>
      </ListGroup>

      <ListGroup>
        <ListGroup.Label>방문 병원</ListGroup.Label>
        <ListGroup.ItemContainer>
          <input
            className="bg-transparent outline-none"
            placeholder="병원을 입력해주세요."
          />
        </ListGroup.ItemContainer>
      </ListGroup>

      <ListGroup>
        <ListGroup.Label>증상 및 특이사항</ListGroup.Label>
        <ListGroup.ItemContainer>
          <input
            className="bg-transparent outline-none"
            placeholder="증상을 입력해주세요."
          />
        </ListGroup.ItemContainer>
      </ListGroup>

      <ListGroup>
        <ListGroup.ItemContainer>
          <ListGroup.BetweenLayout>
            <ListGroup.PrimaryText>반복</ListGroup.PrimaryText>
            <div className="flex gap-2">
              <ListGroup.SecondaryText>없음</ListGroup.SecondaryText>
              <div className="text-gray-500">&gt;</div>
            </div>
          </ListGroup.BetweenLayout>

          <div className="h-[1px] bg-gray-400 my-1" />

          <ListGroup.BetweenLayout>
            <ListGroup.PrimaryText>알림</ListGroup.PrimaryText>
            <div className="flex gap-2">
              <ListGroup.SecondaryText>1시간 전</ListGroup.SecondaryText>
              <div className="text-gray-500">&gt;</div>
            </div>
          </ListGroup.BetweenLayout>
        </ListGroup.ItemContainer>
      </ListGroup>
    </div>
  );
};

export default page;
