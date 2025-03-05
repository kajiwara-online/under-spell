import Card from "./Card";
import { Recruit } from "@/_libs/client";

const RecruitCards = ({ recruit }: { recruit: Recruit[] }) => {
  return (
    <ul className="md:flex md:flex-wrap md:mt-[-6.481481481481481%] md:ml-[-2.777777777777778%] cards">
      {recruit.map((data) => (
        <Card key={data.id} content={data} />
      ))}
    </ul>
  );
};

export default RecruitCards;
