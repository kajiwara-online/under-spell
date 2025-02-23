import Card from "./Card";
import { Recruit } from "@/_libs/client";

const RecruitCards = ({ recruit }: { recruit: Recruit[] }) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {recruit.map((data) => (
        <Card key={data.id} content={data} />
      ))}
    </ul>
  );
};

export default RecruitCards;
