import Image from "next/image";
import Link from "next/link";

export const Card = ({ content }) => {
  const defaultImage = "/images/default.jpg"; // デフォルト画像のパス

  return (
    <li className="border shadow-lg mb-10">
      <Link href={`/information/${content.id}`}>
        {/* 固定のアスペクト比を設定するためのラッパー */}
        <div className="relative w-full aspect-w-16 aspect-h-9">
          <Image
            src={content.eyecatch ? content.eyecatch.url : defaultImage} // デフォルト画像を設定
            alt={content.title}
            layout="fill" // 親要素に合わせて画像を広げる
            objectFit="cover" // 親要素に収まるようにトリミング
          />
        </div>
        <div className="px-3 py-1">
          {/* タイトルの表示 */}
          <h2 className="text-sm font-semibold">{content.title}</h2>
          <p className="text-xs leading-loose">{content.description}</p>
          {/* カテゴリの表示（配列の場合） */}
          {content.category && content.category.length > 0 && (
            <p className="text-xs text-gray-400">{content.category[0]}</p>
          )}
        </div>
      </Link>
    </li>
  );
};
