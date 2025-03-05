import { Information } from "@/_libs/client";
import Link from "next/link";

const News = ({ articles }: { articles: Information[] }) => {
  return (
    <div className="mt-[4.25rem] md:grid md:grid-rows-[auto_auto] md:grid-cols-[45fr_63fr] md:relative md:mt-40">
      <header className="flex items-baseline justify-between mb-5 row-[1/2] col-[1/3] text-[1.125rem] tracking-[.02em] leading-[1.277777777777778] md:mb-[2.125rem] md:text-[1.5rem] md:tracking-[.-6em]">
        <h2 className="text-[1.125rem] tracking-[.06em] leading-[1.277777777777778] md:text-[1.5rem]">
          NEWS
        </h2>
      </header>
      <div className="row-[1/3] col-[2/3] z-[1]">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/information/${article.id}`}
            className="flex items-center border-t border-[#eee] py-[1.21875rem] last:border-b"
          >
            <p className="flex-[1_0_0%] text-[.8125rem] tracking-[0] leading-[1.846153846153846] pr-[2.1875rem]">
              {article.title}
            </p>
            <time
              dateTime={article.publishedAt}
              className="w-[4.0625rem] text-[#999] text-[.6875rem] tracking-[0] leading-none md:w-20"
            >
              {article.publishedAt &&
                new Date(article.publishedAt).toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })}
            </time>
          </Link>
        ))}
      </div>
      <footer className="mt-[1.8125rem] row-[2/3] col-[1/3] z-0 md:flex md:items-center">
        <Link
          href="/information?category=news"
          className="inline-flex items-center flex-row-reverse text-[.6875rem] tracking-[.04em] leading-[1.272727272727273] md:text-[.75rem] md:leading-[1.166666666666667] before:content-[''] before:w-[.4375rem] before:h-[.75rem] before:ml-[.9375rem] before:bg-no-repeat before:bg-center before:bg-contain before:bg-[url('data:image/svg+xml;charset=utf-8;base64,PHN2ZyBoZWlnaHQ9JzEyJyB2aWV3Qm94PScwIDAgNyAxMicgd2lkdGg9JzcnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nbS4zMTggMTAuOTUuNzA3LjcwNyA1LjY1Ny01LjY1Ny01LjY1Ny01LjY1Ny0uNzA3LjcwNyA0Ljk1IDQuOTV6Jy8+PC9zdmc+')]"
        >
          See all posts
        </Link>
      </footer>
    </div>
  );
};

export default News;
