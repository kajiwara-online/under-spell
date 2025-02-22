import { Information } from "@/_libs/client";
import Link from "next/link";

const News = ({ articles }: { articles: Information[] }) => {
  return (
    <div className="lg:mt-40 md:mt-[clamp(125px,16vw,160px)] mt-[clamp(60px,18vw,136px)] md:relative md:grid md:grid-rows-[auto_auto] md:grid-cols-[45fr_63fr]">
      <header className="row-[1/2] col-[1/3] flex items-baseline justify-between lg:mb-[2.125rem] md:mb-[clamp(26.6px,3.5vw,34px)] mb-[clamp(17.5px,5.4vw,40px)] lg:text-2xl md:text-[clamp(19px,2.5vw,1.5rem)] text-[clamp(15.75px,4.8vw,36px)]">
        <h2 className="">NEWS</h2>
      </header>
      <div className="row-[1/3] col-[2/3] z-[1]">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/news/${article.id}`}
            className="flex items-center transition-colors duration-300 border-t border-[#eee] lg:py-[1.21875rem] md:py-[clamp(15.25px,2vw,1.21875rem)] py-[clamp(17px,5.2vw,39px)] last:border-b"
          >
            <p className="lg:text-sm md:text-[clamp(10.17px,1.36vw,0.875rem)] text-[clamp(11.375px,3.47vw,26px)] flex flex-[1_0_0%] lg:pr-[2.1875rem] md:pr-[clamp(27.38px,3.65vw,35px)] pr-[clamp(30.625px,9.35vw,70px)]">
              {article.title}
            </p>
            <time
              dateTime={article.publishedAt}
              className="w-20 lg:text-xs md:text-[clamp(8.6px,1.15vw,11px)] text-[clamp(9.625px,2.9vw,22px)] text-[#999]"
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
      <footer className="lg:text-xs md:text-[clamp(9.38px,1.25vw,0.75rem)] text-[clamp(9.625px,2.93vw,22px)] md:flex md:items-end lg:mt-[1.8125rem] md:mt-[clamp(22.657px,3vw,1.8125rem)] mt-[clamp(25.375px,7.7vw,58px)] row-[2/3] col-[1/3] z-0">
        <Link
          href="/news"
          className="inline-flex items-center flex-row-reverse transition-opacity duration-300 before:content-[''] before:w-[0.4375rem] before:h-[0.75rem] before:bg-no-repeat before:bg-center before:bg-contain before:ml-[0.9375rem] before:bg-[url('data:image/svg+xml;charset=utf-8;base64,PHN2ZyBoZWlnaHQ9JzEyJyB2aWV3Qm94PScwIDAgNyAxMicgd2lkdGg9JzcnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nbS4zMTggMTAuOTUuNzA3LjcwNyA1LjY1Ny01LjY1Ny01LjY1Ny01LjY1Ny0uNzA3LjcwNyA0Ljk1IDQuOTV6Jy8+PC9zdmc+')]"
        >
          See all posts
        </Link>
      </footer>
    </div>
  );
};

export default News;
