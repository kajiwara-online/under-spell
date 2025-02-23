import Image from "next/image";
import { formatDate } from "@/_utils/date";
import Pagination from "@/_components/Pagination";
import { getAllInformation } from "@/_libs/client";

export const revalidate = 60;

const StaticDetailPage = async ({
  params: { informationId },
}: {
  params: { informationId: string };
}) => {
  const information = await getAllInformation();

  const informationDetail = information.contents.find(
    (data) => data.id === informationId
  );

  if (!informationDetail) {
    return <p>コンテンツが見つかりませんでした。</p>;
  }

  // 現在のIDを基に前後のIDを決定
  const currentIndex = information.contents.findIndex(
    (data) => data.id === informationId
  );
  const nextId =
    currentIndex > 0 ? information.contents[currentIndex - 1].id : undefined;
  const prevId =
    currentIndex < information.contents.length - 1
      ? information.contents[currentIndex + 1].id
      : undefined;

  return (
    <article className="p-28">
      <header className="px-24 mb-14">
        <p className="text-sm text-gray-400 mb-2">
          {formatDate(informationDetail.publishedAt || "")}
          <span className="ml-2">{informationDetail.category.title}</span>
        </p>
        <p className="text-2xl font-medium">{informationDetail.title}</p>
      </header>
      {informationDetail.thumbnail && (
        <Image
          src={informationDetail.thumbnail.url}
          alt={informationDetail.title || "Information Image"}
          height={informationDetail.thumbnail.height}
          width={informationDetail.thumbnail.width}
          priority
          className="w-full h-4/5 object-cover rounded mb-8"
        />
      )}

      <div className="px-24">
        <div
          className="prose"
          dangerouslySetInnerHTML={{
            __html: informationDetail.body || "",
          }}
        />
      </div>

      <Pagination prevId={prevId} nextId={nextId} type="information" />
    </article>
  );
};

export default StaticDetailPage;
