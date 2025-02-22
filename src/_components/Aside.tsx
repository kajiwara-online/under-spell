import Link from "next/link";

const Aside = () => {
  return (
    <aside className="md:grid md:grid-rows-[auto_auto] md:grid-cols-[1fr_1fr_1fr]">
      <Link
        href="/"
        className="md:row-[1/2] md:col-[1/4] grid grid-rows-1 grid-cols-1 relative transition-opacity duration-300"
      >
        <div className="row-[1/2] col-[1/2] z-[0]">
          <picture className="w-full block relative overflow-hidden before:content-[''] before:block before:w-full before:h-0 md:before:pb-[28.14814814814815%] before:pb-[48%]">
            <source media="(min-width: 751px)" srcSet="/images/r.l.jpg" />
            <img
              src="/images/r.jpg"
              alt="サロンから予約する"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </picture>
        </div>
        <div className="text-white text-center row-[1/2] col-[1/2] z-[0] flex flex-col justify-center items-center">
          <b className="font-normal lg:text-[22px] md:text-[clamp(14px,1.875vw,18px)] text-[clamp(15.75px,4.8vw,36px)] lg:mb-3 md:mb-[clamp(7px,0.9375vw,9px)] mb-[clamp(7.875px,2.4vw,18px)]">
            RESERVATION
          </b>
          <p className="lg:text-xs md:text-[clamp(9.3875px,1.25vw,12px)] text-[clamp(9.625px,2.93vw,22px)]">
            サロンから予約する
          </p>
        </div>
      </Link>
      <Link
        href="/"
        className="grid grid-rows-1 grid-cols-1 relative transition-opacity duration-300"
      >
        <div className="row-[1/2] col-[1/2] z-[0]">
          <picture className="w-full block relative overflow-hidden before:content-[''] before:block before:w-full before:h-0 md:before:pb-[62.22222222222222%] before:pb-[34.66666666666667%]">
            <source media="(min-width: 751px)" srcSet="/images/h.l.jpg" />
            <img
              src="/images/h.jpg"
              alt="始めてヘアサロンをご利用の方へ"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </picture>
        </div>
        <div className="text-white text-center row-[1/2] col-[1/2] z-[0] flex flex-col justify-center items-center">
          <b className="font-normal lg:text-[22px] md:text-[clamp(14px,1.875vw,18px)] text-[clamp(15.75px,4.8vw,36px)] lg:mb-3 md:mb-[clamp(7px,0.9375vw,9px)] mb-[clamp(7.875px,2.4vw,18px)]">
            HAIR SALON
          </b>
          <p className="lg:text-xs md:text-[clamp(9.3875px,1.25vw,12px)] text-[clamp(9.625px,2.93vw,22px)]">
            始めてヘアサロンをご利用の方へ
          </p>
        </div>
      </Link>
      <Link
        href="/"
        className="grid grid-rows-1 grid-cols-1 relative transition-opacity duration-300"
      >
        <div className="row-[1/2] col-[1/2] z-[0]">
          <picture className="w-full block relative overflow-hidden before:content-[''] before:block before:w-full before:h-0 md:before:pb-[62.22222222222222%] before:pb-[34.66666666666667%]">
            <source media="(min-width: 751px)" srcSet="/images/n.l.jpg" />
            <img
              src="/images/n.jpg"
              alt="始めてネイル・アイラッシュサロンをご利用の方へ"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </picture>
        </div>
        <div className="text-white text-center row-[1/2] col-[1/2] z-[0] flex flex-col justify-center items-center">
          <b className="font-normal lg:text-[22px] md:text-[clamp(14px,1.875vw,18px)] text-[clamp(15.75px,4.8vw,36px)] lg:mb-3 md:mb-[clamp(7px,0.9375vw,9px)] mb-[clamp(7.875px,2.4vw,18px)]">
            NAIL & EYELASH SALON
          </b>
          <p className="lg:text-xs md:text-[clamp(9.3875px,1.25vw,12px)] text-[clamp(9.625px,2.93vw,22px)]">
            始めてネイル・アイラッシュサロンをご利用の方へ
          </p>
        </div>
      </Link>
      <Link
        href="/"
        className="grid grid-rows-1 grid-cols-1 relative transition-opacity duration-300"
      >
        <div className="row-[1/2] col-[1/2] z-[0]">
          <picture className="w-full block relative overflow-hidden before:content-[''] before:block before:w-full before:h-0 md:before:pb-[62.22222222222222%] before:pb-[34.66666666666667%]">
            <source media="(min-width: 751px)" srcSet="/images/e.l.jpg" />
            <img
              src="/images/e.l.jpg"
              alt="始めてエスパサロンをご利用の方へ"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </picture>
        </div>
        <div className="text-white text-center row-[1/2] col-[1/2] z-[0] flex flex-col justify-center items-center">
          <b className="font-normal lg:text-[22px] md:text-[clamp(14px,1.875vw,18px)] text-[clamp(15.75px,4.8vw,36px)] lg:mb-3 md:mb-[clamp(7px,0.9375vw,9px)] mb-[clamp(7.875px,2.4vw,18px)]">
            ESPA SALON
          </b>
          <p className="lg:text-xs md:text-[clamp(9.3875px,1.25vw,12px)] text-[clamp(9.625px,2.93vw,22px)]">
            始めてエスパサロンをご利用の方へ
          </p>
        </div>
      </Link>
    </aside>
  );
};

export default Aside;
