import OurSalons from "./OurSalons";
import Topic from "./Topic";
import News from "./News";
import { Information } from "@/_libs/client";

const Contents = ({
  topicData,
  newsData,
}: {
  topicData: Information[];
  newsData: Information[];
}) => {
  return (
    <div className="lg:pt-24 lg:px-28 lg:pb-40 md:pt-12 md:px-[calc(0.5rem+5vw)] md:pb-16 pt-[calc(1.25rem+9.5vw)] px-[calc(-0.5rem+9.5vw)] pb-[calc(2.25rem+13vw)]">
      <OurSalons />
      <Topic articles={topicData} />
      <News articles={newsData} />
    </div>
  );
};

export default Contents;
