import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-[#999] border-t border-[#ddd]">
      <div className="lg:pt-20 md:pt-[clamp(54.76px,7.292vw,70px)] pt-[clamp(39.375px,12vw,90px)] lg:px-[5.625rem] md:px-[clamp(43.02px,5.729vw,55px)] px-[clamp(26.25px,8vw,60px)] lg:pb-[2.625rem] md:pb-[clamp(23.47px,3.125vw,30px)] pb-[clamp(13.125px,4vw,30px)]">
        <div className="flex justify-between">
          <div className="lg:w-auto md:w-1/2 w-auto">
            <Link
              href="/"
              className="lg:w-[1.9375rem] w-6 relative block before:content-[''] before:block before:f-full before:h-0 before:pb-[83.33333333333334%]"
            >
              <Image
                src="/images/logo.svg"
                alt="フッターロゴ"
                width={31}
                height={25.83}
                className="absolute top-0 left-0 w-full h-full"
              />
            </Link>
          </div>
          <nav className="flex justify-between w-[12.8125rem] md:justify-start md:w-1/2 md:flex-wrap lg:w-auto flex-nowrap">
            <ul className="lg:pr-[5.625rem] md:pr-[clamp(50.86px,6.77vw,65px)] pr-[clamp(21.875px,6.7vw,50px)] lg:w-auto md:w-1/2 text-[#222] lg:text-sm md:text-[clamp(11px,1.46vw,14px)] text-[clamp(10.5px,3.2vw,24px)]">
              <li>
                <Link href="/">Salon</Link>
              </li>
              <li className="lg:mt-[0.875rem] md:mt-[clamp(11px,1.46vw,14px)] mt-[clamp(8.75px,2.67vw,20px)]">
                <Link href="/">Hairmake</Link>
              </li>
              <li className="lg:mt-[0.875rem] md:mt-[clamp(11px,1.46vw,14px)] mt-[clamp(8.75px,2.67vw,20px)]">
                <Link href="/">Topics</Link>
              </li>
              <li className="lg:mt-[0.875rem] md:mt-[clamp(11px,1.46vw,14px)] mt-[clamp(8.75px,2.67vw,20px)]">
                <Link href="/">News</Link>
              </li>
            </ul>
            <ul className="text-[#999] lg:pr-[9.375rem] md:pr-[clamp(50.86px,6.77vw,65px)] pr-[clamp(21.875px,6.7vw,50px)] lg:w-auto md:w-1/2 lg:text-xs md:text-[clamp(8.6px,1.145vw,11px)] text-[clamp(9.625px,2.94vw,22px)]">
              <li>
                <Link href="/">Nail School</Link>
              </li>
              <li className="lg:mt-3 md:mt-[clamp(9.4px,1.25vw,12px)] mt-[clamp(8.75px,2.67vw,20px)]">
                <Link href="/">Bridal + LIM</Link>
              </li>
              <li className="lg:mt-[1.8125rem] md:mt-[clamp(22.7px,3.02vw,29px)] mt-[clamp(17.5px,5.33vw,40px)]">
                <Link href="/">Company</Link>
              </li>
              <li className="lg:mt-3 md:mt-[clamp(9.4px,1.25vw,12px)] mt-[clamp(8.75px,2.67vw,20px)]">
                <Link href="/">Overseas</Link>
              </li>
              <li className="lg:mt-3 md:mt-[clamp(9.4px,1.25vw,12px)] mt-[clamp(8.75px,2.67vw,20px)]">
                <Link href="/">Recruit</Link>
              </li>
            </ul>
            <div className="lg:w-auto lg:pr-[3.4375rem] lg:m-0 md:mt-[clamp(39.126px,5.2vw,3.125rem)] md:block md:w-full hidden text-[#222] lg:text-xs md:text-[clamp(8.6px,1.145vw,11px)]">
              <div className="md:mb-[clamp(12.9px,1.72vw,16.5px)]">
                For new customer
              </div>
              <div>
                <p>
                  <Link href="/" className="underline">
                    始めてヘアサロンをご利用の方へ
                  </Link>
                </p>
                <p className="md:mt-[clamp(11.35px,1.51vw,14.5px)] mt-[0.78125rem]">
                  <Link href="/" className="underline">
                    始めてネイル・アイラッシュサロンをご利用の方へ
                  </Link>
                </p>
                <p className="md:mt-[clamp(11.35px,1.51vw,14.5px)] mt-[0.78125rem]">
                  <Link href="/" className="underline">
                    始めてエスパサロンをご利用の方へ
                  </Link>
                </p>
              </div>
            </div>
          </nav>
        </div>
        <div className="flex justify-between tracking-[0.018em] w-full lg:mt-[4.375rem] md:mt-[clamp(54.76px,7.293vw,4.375rem)] mt-[clamp(61.25px,18.7vw,140px)] lg:text-xs md:text-[clamp(9.387px,1.25vw,0.75rem)] text-[clamp(9.625px,2.93vw,22px)]">
          <p>
            &copy;
            <Link href="/">LESS IS MORE</Link>
          </p>
          <p>
            <Link href="/">Privacy policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

{
  /* <div>
          <Link href="/">
            <figure>
              <Image
                src={FOOTER_LOGO}
                alt=""
                layout="intrinsic"
                height={160}
                width={40}
              />
            </figure>
          </Link>
        </div>
        <div>
          <div>
            <Link href="/salon">Salon</Link>
            <Link href="/hairmake">Hairmake</Link>
            <Link href="/information/topic">Topics</Link>
            <Link href="/information/news">News</Link>
          </div>
          <div>
            <Link href="/">Nail School</Link>
            <Link href="/">Bridal + LIM</Link>
            <Link href="/">Company</Link>
            <Link href="/">Overseas</Link>
            <Link href="/">Recruit</Link>
          </div>
          <div>
            <p>For new customer</p>
            <Link href="/">始めてヘアサロンをご利用の方へ</Link>
            <Link href="/">始めてネイル・アイラッシュサロンをご利用の方へ</Link>
            <Link href="/">始めてエスパサロンをご利用の方へ</Link>
          </div>
        </div>
        <div>
          <Link href="/">&copy; LESS IS MORE</Link>
          <Link href="/">Privacy policy</Link>
        </div> */
}
