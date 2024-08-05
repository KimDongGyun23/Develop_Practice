"use client";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { week: 1, name: "6월 1째주", weight: 55.2 },
  { week: 2, name: "6월 2째주", weight: 54.8 },
  { week: 3, name: "6월 3째주", weight: 55.0 },
  { week: 4, name: "6월 4째주", weight: 54.6 },
];

const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
  return <text x={x} y={y - 7} textAnchor="middle">{`${value}kg`}</text>;
};

const page = () => {
  return (
    <>
      <section className="mb-10">
        <div className="flexAlign gap-1">
          <p className="text-xl font-bold">체중 그래프</p>
          <select className="mr-auto">
            <option>주간</option>
            <option>월간</option>
            <option>연간</option>
          </select>
          <div className="flexAlign text-sm font-medium">
            <p className="px-1">추가</p>
            <span className=" text-gray-400">|</span>
            <p className="px-1">수정</p>
          </div>
        </div>
      </section>

      <section>
        <ResponsiveContainer height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray={5} vertical={false} />
            <XAxis dataKey="week" axisLine={false} tickLine={false} />
            <YAxis
              tickCount={3}
              axisLine={false}
              tickLine={false}
              domain={([dataMin, dataMax]) => {
                let max = Math.ceil(dataMax / 5) * 5;
                let min = Math.floor(dataMin / 5) * 5;
                return [
                  min >= dataMin ? min - 5 : min,
                  max <= dataMax ? max + 5 : max,
                ];
              }}
            />
            <Tooltip payload={data} />
            <Line type="monotone" dataKey="weight" stroke="black" />
          </LineChart>
        </ResponsiveContainer>
      </section>
    </>
  );
};

export default page;
