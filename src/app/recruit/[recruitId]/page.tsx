import Image from "next/image";
import { formatDate } from "@/_utils/date";
import Pagination from "@/_components/Pagination";
import { getAllRecruit } from "@/_libs/client";

export const revalidate = 60;

const StaticDetailPage = async ({
  params: { recruitId },
}: {
  params: { recruitId: string };
}) => {
  const recruit = await getAllRecruit();

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
    <article className="p-28">
      <header className="px-24 mb-14">
        <p className="text-sm text-gray-400 mb-2">
          {formatDate(recruitDetail.publishedAt || "")}
          <span className="ml-2">{recruitDetail.location}</span>
        </p>
        <p className="text-2xl font-medium">{recruitDetail.title}</p>
      </header>
      {recruitDetail.thumbnail && (
        <Image
          src={recruitDetail.thumbnail.url}
          alt={recruitDetail.title || "Recruit Image"}
          height={recruitDetail.thumbnail.height}
          width={recruitDetail.thumbnail.width}
          priority
          className="w-full h-4/5 object-cover rounded mb-8"
        />
      )}

      <div className="px-24">
        <div
          className="prose"
          dangerouslySetInnerHTML={{
            __html: recruitDetail.body || "",
          }}
        />
      </div>

      <Pagination prevId={prevId} nextId={nextId} type="recruit" />
    </article>
  );
};

export default StaticDetailPage;
