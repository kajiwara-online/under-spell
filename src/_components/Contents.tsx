import OurSalons from "./OurSalons";
import Topic from "./Topic";
import News from "./News";
import { Information } from "@/_libs/client";
import { Suspense } from "react";
import Spinner from "./common/Spinner";

const Contents = ({
  topicData,
  newsData,
}: {
  topicData: Information[];
  newsData: Information[];
}) => {
  return (
    <div className="pt-[2.8125rem] pb-[4.375rem] px-[1.875rem] md:pt-[3.75rem] md:pb-20 md:px-[3.4375rem] lg:pt-[5.9375rem] lg:pb-40 lg:px-[10vw] lg:max-w-[1670px] lg:my-0 lg:mx-auto xl:pt-[5.688622754491018vw] xl:pb-[11.377245508982035vw] xl:px-[13.541666666666666vw]">
      <OurSalons />
      <Suspense fallback={<Spinner />}>
        <Topic articles={topicData} />
      </Suspense>
      <News articles={newsData} />
    </div>
  );
};

export default Contents;
