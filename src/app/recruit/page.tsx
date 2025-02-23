import RecruitCards from "@/_components/RecruitCards";
import { getAllRecruit } from "@/_libs/client";

const RecruitHome = async () => {
  const recruit = await getAllRecruit({
    orders: "-publishedAt", // 最新順
  });

  // console.log(`recruit: ${JSON.stringify(recruit, null, 2)}`);

  return (
    <div className="lg:pt-20 md:pt-[clamp(3rem,8vw,5rem)] pt-[15vw]">
      <main className="lg:pt-[75px] lg:pb-[150px] lg:px-[10vw] md:pt-[clamp(47px,6.25vw,60px)] md:pb-[clamp(62.6px,8.4vw,80px)] md:px-[clamp(43px,5.73vw,55px)] pt-[clamp(40.25px,12.3vw,92px)] pb-[clamp(70px,21.5vw,160px)] px-[clamp(26.25px,8vw,60px)]">
        <header>
          <h1 className="lg:text-4xl md:text-[clamp(26.6px,3.542vw,34px)] text-[clamp(21px,6.4vw,48px)] lg:mb-[62.5px] md:mb-[clamp(33.26px,4.427vw,42.5px)] mb-[clamp(29.75px,9.1vw,68px)]">
            RECRUIT
          </h1>
        </header>
        <RecruitCards recruit={recruit.contents} />
      </main>
    </div>
  );
};

export default RecruitHome;
