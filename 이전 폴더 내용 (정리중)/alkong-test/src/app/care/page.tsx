import { ListGroup } from "../_components/listGroup";
import Tag from "../_components/Tag";
import CareCalendar from "./_components/CareCalendar";

const TAGS = ["건강검진", "내시경"];

const page = () => {
  return (
    <>
      <section className="my-3 border-b-2 border-gray-200">
        <CareCalendar />
      </section>

      <section className="my-3">
        <div className="flexBetweenAlign mb-5">
          <p className="text-lg font-bold">병원 내원 일정</p>
          <Tag>추가+</Tag>
        </div>
        <ListGroup>
          <ListGroup.Label>21일 (금)</ListGroup.Label>
          <ListGroup.ItemContainer>
            <ListGroup.BetweenLayout>
              <ListGroup.PrimaryText>11:00 우시 종합병원</ListGroup.PrimaryText>
              <div className="w-6 h-6 rounded-full bg-gray-400" />
            </ListGroup.BetweenLayout>
            <ListGroup.Tags list={TAGS} />
          </ListGroup.ItemContainer>
        </ListGroup>
      </section>
    </>
  );
};

export default page;
