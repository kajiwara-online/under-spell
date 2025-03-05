import { Information } from "@/_libs/client";
import Image from "next/image";
import Link from "next/link";

const DEFAULTIMAGE = "/images/default.jpg";

const Topic = ({ articles }: { articles: Information[] }) => {
  return (
    <div className="mt-[3.3125rem] md:mt-28">
      <header className="flex items-center justify-between mb-5 text-[1.125rem] tracking-[.02em] leading-[1.277777777777778] md:text-[1.5rem] md:tracking-[.06em] md:mb-[2.125rem]">
        <h2 className="text-[1.125rem] tracking-[.06em] leading-[1.277777777777778] md:text-[1.5rem]">
          TOPICS
        </h2>
        <p>
          <Link
            href="/information?category=topic"
            className="inline-flex items-center flex-row-reverse text-[.6875rem] tracking-[.04em] leading-[1.272727272727273] md:text-[.75rem] md:leading-[1.166666666666667] before:content-[''] before:w-[.4375rem] before:h-[.75rem] before:pb-[48%] before:ml-[.9375rem] before:bg-no-repeat before:bg-center before:bg-contain before:bg-[url('data:image/svg+xml;charset=utf-8;base64,PHN2ZyBoZWlnaHQ9JzEyJyB2aWV3Qm94PScwIDAgNyAxMicgd2lkdGg9JzcnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nbS4zMTggMTAuOTUuNzA3LjcwNyA1LjY1Ny01LjY1Ny01LjY1Ny01LjY1Ny0uNzA3LjcwNyA0Ljk1IDQuOTV6Jy8+PC9zdmc+')]"
          >
            All Topics
          </Link>
        </p>
      </header>
      <ul className="md:flex md:flex-wrap md:mt-[-6.481481481481481%] md:ml-[-2.777777777777778%]">
        {articles.map((article) => (
          <li
            key={article.id}
            className="md:w-[47.2972972972973%] md:mt-[6.306306306306306%] md:ml-[2.702702702702703%]"
          >
            <Link href={`/information/${article.id}`} className="block">
              <div className="block relative overflow-hidden mb-[.8125rem] md:mb-[.9375rem] before:content-[''] before:block before:w-full before:h-0 before:pb-[60.317460317460316%] md:before:pb-[60.588235294117645%]">
                <Image
                  src={article.thumbnail ? article.thumbnail.url : DEFAULTIMAGE}
                  alt={article.title || "Information Image"}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-[.9375rem] tracking-[.04em] leading-[1.466666666666667] font-medium">
                {article.title}
              </div>
              <div className="text-[.8125rem] leading-[1.846153846153846] mt-[.4375rem] md:text-[.75rem] md:leading-[2]">
                {article.description}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Topic;
