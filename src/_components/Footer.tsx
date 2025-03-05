import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="text-[.6875rem] tracking-[.06em] leading-[1.272727272727273] text-[#999] border-t border-[#ddd] md:text-[.75rem] md:leading-[1.166666666666667]">
      <div className="pt-[2.8125rem] pb-[.9375rem] px-[1.875rem] md:pt-[4.375rem] md:pb-[1.875rem] md:px-[3.4375rem] lg:pt-20 lg:pb-[2.625rem] lg:px-[5.625rem]">
        <div className="flex justify-between">
          <div className="w-auto md:w-1/2 lg:w-auto">
            <Link
              href="/"
              className="relative block w-6 lg:w-[1.9375rem] before:content-[''] before:block before:f-full before:h-0 before:pb-[83.33333333333334%]"
            >
              <Image
                src="/images/logo.svg"
                alt="フッターロゴ"
                fill
                className="object-contain"
              />
            </Link>
          </div>
          <nav className="flex justify-between w-[12.8125rem] md:justify-start md:w-1/2 md:flex-wrap lg:w-auto lg:flex-nowrap">
            <ul className="text-[.75rem] tracking-[.03em] leading-5 text-[#222] pr-[1.5625rem] md:text-[.875rem] md:w-1/2 md:pr-[4.0625rem] lg:pr-[5.625rem] lg:w-auto">
              <li>
                <Link href="/">Salon</Link>
              </li>
              <li className="mt-[.625rem]">
                <Link href="/">Hairmake</Link>
              </li>
              <li className="mt-[.625rem]">
                <Link href="/">Topics</Link>
              </li>
              <li className="mt-[.625rem]">
                <Link href="/">News</Link>
              </li>
            </ul>
            <ul className="text-[#999] text-[.6875rem] tracking-[.06em] leading-[1.272727272727273] pr-[1.5625rem] md:w-1/2 md:pr-[4.0625rem] lg:pr-[9.375rem] lg:w-auto">
              <li>
                <Link href="/">Nail School</Link>
              </li>
              <li className="mt-[.625rem]">
                <Link href="/">Bridal + LIM</Link>
              </li>
              <li className="mt-[1.25rem]">
                <Link href="/">Company</Link>
              </li>
              <li className="mt-[.625rem]">
                <Link href="/">Overseas</Link>
              </li>
              <li className="mt-[.625rem]">
                <Link href="/">Recruit</Link>
              </li>
            </ul>
            <div className="hidden text-[.6875rem] tracking-[.02em] leading-[1.272727272727273] text-[#222] md:block md:w-full md:mt-[3.125rem] lg:w-auto lg:m-0 lg:pr-[3.4375rem] ">
              <div className="text-[.75rem] tracking-[.04em] leading-[1.166666666666667] mb-[.90625rem]">
                For new customer
              </div>
              <div>
                <p>
                  <Link href="/" className="underline">
                    始めてヘアサロンをご利用の方へ
                  </Link>
                </p>
                <p className="mt-[.78125rem]">
                  <Link href="/" className="underline">
                    始めてネイル・アイラッシュサロンをご利用の方へ
                  </Link>
                </p>
                <p className="mt-[.78125rem]">
                  <Link href="/" className="underline">
                    始めてエスパサロンをご利用の方へ
                  </Link>
                </p>
              </div>
            </div>
          </nav>
        </div>
        <div className="flex justify-between tracking-[0.018em] w-full mt-[4.375rem]">
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
