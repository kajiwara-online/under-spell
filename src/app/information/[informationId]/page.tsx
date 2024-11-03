import Image from "next/image";
import { formatDate } from "@/utils/date";
import { getInformation, getInformationDetail } from "../../../../libs/client";

export async function generateStaticParams() {
  const { contents } = await getInformation();

  const paths = contents.map((information) => {
    return {
      informationId: information.id,
    };
  });
  return [...paths];
}

const StaticDetailPage = async ({
  params: { informationId },
}: {
  params: { informationId: string };
}) => {
  const information = await getInformationDetail(informationId);

  if (!information) {
    return <p>コンテンツが見つかりませんでした。</p>;
  }

  return (
    <div className="p-28">
      <div className="px-24 mb-14">
        <p className="text-sm text-gray-400 mb-2">
          {formatDate(information.publishedAt)}
          {information.category[0]}
        </p>
        <p className="text-2xl font-medium">{information.title}</p>
      </div>
      {information.eyecatch && (
        <Image
          src={information.eyecatch.url}
          alt={information.title}
          height={information.eyecatch.height}
          width={information.eyecatch.width}
          priority
          className="w-full h-4/5 object-cover rounded mb-8"
        />
      )}

      <div className="px-24">
        <div
          className="prose"
          dangerouslySetInnerHTML={{
            __html: `${information.body}`,
          }}
        />
      </div>
    </div>
  );
};
export default StaticDetailPage;
