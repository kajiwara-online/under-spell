import { Information, Recruit } from "@/_libs/client";
import Image from "next/image";
import Link from "next/link";

type InfoOrRecruit = Information | Recruit;

const Card = ({ content }: { content: InfoOrRecruit }) => {
  const DEFAULTIMAGE = "/images/default.jpg"; // デフォルト画像のパス

  // 1) リンク先を "Information" か "Recruit" で分岐
  //    → 'category' in content なら 'Information'
  //    → そうでなければ 'Recruit'
  const linkHref =
    "category" in content
      ? `/information/${content.id}`
      : `/recruit/${content.id}`;

  // 2) サムネイル
  const imageUrl = content.thumbnail ? content.thumbnail.url : DEFAULTIMAGE;

  // 3) description → 'description' in content
  //    ただし Recruit型 には 'description' フィールドがないので
  //    このままだとエラーになる。存在するかどうかを確認し条件表示。
  //    or optional chaining
  const showDescription =
    "description" in content && content.description ? content.description : "";

  // 4) category.title or location
  //    'category' in content → Information
  //        → content.category.title
  //    else Recruit
  //        → content.location
  let extraInfo = "";
  if ("category" in content) {
    // content is Information
    extraInfo = content.category.title;
  } else {
    // content is Recruit
    extraInfo = content.location;
  }

  return (
    <li className="border shadow-lg mb-10">
      {/* 1) リンク先を変える */}
      <Link href={linkHref}>
        <div className="relative w-full aspect-w-16 aspect-h-9">
          <Image
            src={imageUrl}
            alt={content.title || "Image"}
            fill
            className="object-cover"
          />
        </div>
        <div className="px-3 py-1">
          <h3 className="text-sm font-semibold">{content.title}</h3>

          {/* 3) description があれば表示 */}
          {/* recruit の場合 'description' がないので空文字 */}
          {showDescription && (
            <p className="text-xs leading-loose">{showDescription}</p>
          )}

          {/* jobs プロパティが false なら "終了しました" */}
          {"jobs" in content && content.jobs === false && (
            <p className="text-xs text-red-500">終了しました</p>
          )}

          {/* 4) category.title or location */}
          {extraInfo && <p className="text-xs text-gray-400">{extraInfo}</p>}
        </div>
      </Link>
    </li>
  );
};

export default Card;
