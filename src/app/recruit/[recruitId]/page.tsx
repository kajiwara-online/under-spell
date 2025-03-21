// import Image from "next/image";
import { formatDate } from "@/_utils/date";
import Pagination from "@/_components/Pagination";
import { getAllRecruit } from "@/_libs/client";

export const revalidate = 60;

const StaticDetailPage = async ({
  params: { recruitId },
}: {
  params: { recruitId: string };
}) => {
  const recruit = await getAllRecruit({
    // 全てのリクルートを取得
    limit: 100,
    orders: "-publishedAt", // 最新順
  });

  const recruitDetail = recruit.contents.find((data) => data.id === recruitId);

  if (!recruitDetail) {
    return <p>コンテンツが見つかりませんでした。</p>;
  }

  // 現在のIDを基に前後のIDを決定
  const currentIndex = recruit.contents.findIndex(
    (data) => data.id === recruitId
  );
  const nextId =
    currentIndex > 0 ? recruit.contents[currentIndex - 1].id : undefined;
  const prevId =
    currentIndex < recruit.contents.length - 1
      ? recruit.contents[currentIndex + 1].id
      : undefined;

  return (
    <div className="pt-[3.9375rem] md:pt-[4.375rem] lg:pt-[5.1875rem]">
      <article className="pt-[3.125rem] pb-20 px-[1.875rem] md:py-20 md:px-[3.4375rem] lg:pt-[125px] lg:pb-[9.375rem] lg:px-[10vw] lg:max-w-[1670px] lg:my-0 lg:mx-auto xl:pt-[5.688622754491018vw] xl:pb-[11.377245508982035vw] xl:px-[13.541666666666666vw]">
        <header className="mb-[2.125rem] mx-auto md:w-full md:mb-[3.84375rem] md:mx-auto md:max-w-[1080px] md:px-[10vw] xl:px-[135px]">
          <div className="text-[.6875rem] tracking-[.03em] leading-[1.272727272727273] text-[#999] mb-2 md:text-[.75rem] md:leading-[1.166666666666667] md:mb-[.59375rem]">
            <time>
              {formatDate(recruitDetail.publishedAt || "")}
              {recruitDetail.location}
            </time>
          </div>
          <h1 className="text-[1.25rem] tracking-[0] leading-[1.6] font-medium md:text-[1.75rem] md:leading-[1.607142857142857]">
            {recruitDetail.title}
          </h1>
        </header>
        <div className="md:text-[.875rem] md:leading-[2.142857142857143] md:max-w-[1080px] md:my-0 md:mx-auto md:py-0 md:px-[10vw] xl:py-0 xl:px-[135px] c_inr">
          {/* {recruitDetail.thumbnail && (
            <figure className="my-[3.125rem] mx-0 md:my-20 md:mx-[-10vw] xl:my-[80px] xl:mx-[-135px]">
              <div className="relative block w-full h-0 pb-[62.55033557047%]">
                <Image
                  src={recruitDetail.thumbnail.url}
                  alt={recruitDetail.title || "Information Image"}
                  fill
                  className="object-cover"
                />
              </div>
            </figure>
          )} */}
          <div>
            <div
              className="prose"
              dangerouslySetInnerHTML={{
                __html: recruitDetail.body || "",
              }}
            />
          </div>
        </div>
        <footer>
          <Pagination prevId={prevId} nextId={nextId} type="recruit" />
        </footer>
      </article>
    </div>
  );
};

export default StaticDetailPage;
