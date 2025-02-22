import { Information } from "@/_libs/client";
import Image from "next/image";
import Link from "next/link";

const Topic = ({ articles }: { articles: Information[] }) => {
  const DEFAULTIMAGE = "/images/default.jpg"; // デフォルト画像のパス
  return (
    <div className="lg:mt-28 mt-[clamp(3rem,calc(10vw+1rem),7rem)]">
      <header className="flex justify-between items-center lg:mb-9 md:mb-[clamp(27px,calc(-0.065rem+3.65vw),36px)] mb-[clamp(18px,calc(-0.1rem+6.15vw),40px)]">
        <h2 className="lg:text-2xl md:text-[clamp(19px,calc(-0.05rem+2.5vw),24px)] text-[clamp(16px,calc(-0.0375rem+4.75vw),36px)]">
          TOPICS
        </h2>
        <p>
          <a
            href="/information?category=TOPIC"
            className="lg:text-xs md:text-[clamp(10px,calc(0.5rem+0.3vw),12px)] text-[clamp(9.7px,calc(-0.07rem+3vw),22px)] flex items-center flex-row-reverse before:content-[''] before:block before:w-4 before:h-4 before:ml-4 before:bg-no-repeat before:bg-center before:bg-[url('data:image/svg+xml;charset=utf-8;base64,PHN2ZyBoZWlnaHQ9JzEyJyB2aWV3Qm94PScwIDAgNyAxMicgd2lkdGg9JzcnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nbS4zMTggMTAuOTUuNzA3LjcwNyA1LjY1Ny01LjY1Ny01LjY1Ny01LjY1Ny0uNzA3LjcwNyA0Ljk1IDQuOTV6Jy8+PC9zdmc+')]"
          >
            All Topics
          </a>
        </p>
      </header>
      <ul className="md:flex md:flex-wrap md:mt-[-6.481481481481481%] md:ml-[-2.777777777777778%]">
        {articles.map((article) => (
          <li
            key={article.id}
            className="md:w-[47.2972972972973%] md:mt-[6.306306306306306%] md:ml-[2.702702702702703%]"
          >
            <Link
              href={`/information/${article.id}`}
              className="block transition-opacity duration-300"
            >
              <div className="block relative overflow-hidden md:mb-[0.9375rem] mb-[0.8125rem] before:content-[''] before:block before:w-full before:h-0 md:before:pb-[60.588235294117645%] before:pb-[60.317460317460316%]">
                <Image
                  src={article.thumbnail ? article.thumbnail.url : DEFAULTIMAGE}
                  alt={article.title || "Information Image"}
                  fill
                  className="object-cover absolute top-0 left-0 w-full h-full" // カバーして配置
                />
              </div>
              <h3 className="lg:text-base md:text-[clamp(12px,1.6vw,16px)] text-[clamp(13.5px,4vw,1.875rem)]">
                {article.title}
              </h3>
              <p className="lg:text-xs md:text-[clamp(9.5px,1.2vw,12px)] text-[clamp(11.5px,3.38vw,26px)] lg:mt-2 md:mt-[clamp(6px,0.78vw,0.5rem)] mt-[clamp(6.125px,1.85vw,14px)]">
                {article.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Topic;
