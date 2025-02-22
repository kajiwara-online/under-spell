import Aside from "@/_components/Aside";
import Contents from "@/_components/Contents";
import Hero from "@/_components/Hero";

import { TOP_INFORMATION_LIMIT } from "@/_constants";
import { getAllInformation } from "@/_libs/client";

const Home = async () => {
  const [newsData, topicData] = await Promise.all([
    getAllInformation({
      // categoryがnewsのデータを取得
      filters: "category[equals]news",
      limit: TOP_INFORMATION_LIMIT,
      orders: "-publishedAt", // 最新順
    }),
    getAllInformation({
      // categoryがtopicのデータを取得
      filters: "category[equals]topic",
      limit: TOP_INFORMATION_LIMIT,
      orders: "-publishedAt", // 最新順
    }),
  ]);

  return (
    <main>
      <Hero imageOn />
      <Contents newsData={newsData.contents} topicData={topicData.contents} />
      <Aside />
    </main>
  );
};

export default Home;
