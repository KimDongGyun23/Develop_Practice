"use client";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CareCalendar.css";
import dayjs from "dayjs";

const CareCalendar = () => {
  const dayList = [
    "2024-07-10",
    "2024-07-21",
    "2024-06-02",
    "2024-06-14",
    "2024-06-27",
  ];

  // 각 날짜 타일에 컨텐츠 추가
  const addContent = ({ date }: any) => {
    // 해당 날짜(하루)에 추가할 컨텐츠의 배열
    const contents = [];

    // date(각 날짜)가  리스트의 날짜와 일치하면 해당 컨텐츠 추가
    if (dayList.find((day) => day === dayjs(date).format("YYYY-MM-DD"))) {
      contents.push(
        <div
          key={dayjs(date).format("YYYY-MM-DD")}
          className="absolute top-0 left-0 opacity-70 w-full h-full bg-gray-300 rounded-full"
        />
      );
    }
    return <div>{contents}</div>; // 각 날짜마다 해당 요소가 들어감
  };

  return (
    <div className="margin-auto w-full h-[450px]">
      <Calendar
        locale="ko"
        formatDay={(_, date) => dayjs(date).format("D")} // 일 제거 숫자만 보이게
        formatYear={(_, date) => dayjs(date).format("YYYY")} // 네비게이션 눌렀을때 숫자 년도만 보이게
        formatMonthYear={(_, date) => dayjs(date).format("YYYY년 MM월")} // 네비게이션 2024. 12
        calendarType="gregory" // 일요일 부터 시작
        showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
        next2Label={null} // +1년 & +10년 이동 버튼 숨기기
        prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
        minDetail="year" // 10년단위 년도 숨기기
        tileContent={addContent}
      />
    </div>
  );
};

export default CareCalendar;
