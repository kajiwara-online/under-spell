import { Information } from "@/_libs/client";
import Image from "next/image";
import Link from "next/link";

const Card = ({ information }: { information: Information }) => {
  const DEFAULTIMAGE = "/images/default.jpg"; // デフォルト画像のパス

  // console.log(
  //   `Cardコンポーネントのinformation: ${JSON.stringify(information, null, 2)}`
  // );

  return (
    <li className="border shadow-lg mb-10">
      <Link href={`/information/${information.id}`}>
        <div className="relative w-full aspect-w-16 aspect-h-9">
          <Image
            src={
              information.thumbnail ? information.thumbnail.url : DEFAULTIMAGE
            }
            alt={information.title || "Information Image"}
            fill
            className="object-cover" // カバーして配置
          />
        </div>
        <div className="px-3 py-1">
          <h3 className="text-sm font-semibold">{information.title}</h3>
          <p className="text-xs leading-loose">{information.description}</p>
          <p className="text-xs text-gray-400">{information.category.title}</p>
        </div>
      </Link>
    </li>
  );
};

export default Card;
