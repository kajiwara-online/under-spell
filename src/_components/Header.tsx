"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleNavbar = (): void => {
    if (!openMenu) {
      setOpenMenu(true);
      setIsAnimating(true);
    } else {
      setIsAnimating(true);
      setOpenMenu(false);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300); // アニメーションのdurationと合わせる
    }
  };

  return (
    <header className="fixed w-full h-[3.9375rem] top-0 left-0 z-[64] bg-[#fff] md:h-[4.375rem] lg:h-[5.1875rem]">
      <div className="flex justify-between items-center py-[.6875rem] pr-[1.5rem] pl-[1.875rem] md:pt-[1.0625rem] md:pl-[1.5rem] md:pb-[1.0625rem] md:pr-[1.5625rem] lg:py-[1.25rem] lg:px-[2.8125rem]">
        <div className="pt-[.3125rem]">
          <Link
            href="/"
            className="w-[1.5rem] relative block md:w-[1.1875rem] lg:w-[1.875rem] before:content-[''] before:block before:w-full before:h-0 before:pb-[83.33333333333334%]"
            aria-label="ホーム"
          >
            <Image
              src="/images/logo.svg"
              alt="ヘッダーロゴ"
              fill
              className="object-contain"
            />
          </Link>
        </div>

        <div className="flex justify-between items-center">
          <ul className="hidden text-[.8125rem] tracking-[.03em] leading-[2] mr-[3.375rem] lg:flex">
            <li>
              <Link href="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link href="/salons/" className="ml-[2.5rem]">
                Salon
              </Link>
            </li>
            <li>
              <Link href="/hairmake/" className="ml-[2.5rem]">
                Hairmake
              </Link>
            </li>
            <li>
              <Link href="/information/" className="ml-[2.5rem]">
                Information
              </Link>
            </li>
            <li>
              <Link href="/recruit/" className="ml-[2.5rem]">
                Recruit
              </Link>
            </li>
          </ul>
          <Link
            href="/reserve/"
            className="flex justify-center items-center md:border md:border-[#ddd] w-full h-auto mr-3 text-[.875rem] tracking-[.02em] leading-[1.142857142857143] md:leading-none md:mr-[3.6875rem] md:w-[8.75rem] md:h-[2.6875rem] md:text-[.8125rem]"
          >
            Reservation
          </Link>

          <div className="w-[.9375rem] h-[1rem] cursor-pointer relative">
            <Image
              src="/images/menu.svg"
              alt=""
              fill
              className="object-contain"
              onClick={toggleNavbar}
              aria-label="メニューを開く"
            />
          </div>

          {/* オーバーレイメニュー */}
          {(openMenu || isAnimating) && (
            <div
              className={`bg-[#fff] fixed z-128 top-0 left-0 w-full h-full ${
                openMenu && isAnimating
                  ? "animate-fadeIn"
                  : !openMenu && isAnimating
                  ? "animate-fadeOut"
                  : ""
              }`}
            >
              <div className="md:flex md:flex-row-reverse md:h-full">
                <div className="relative pt-[5.375rem] px-[1.875rem] pb-[2.5rem] md:flex md:justify-center md:items-center md:min-w-[40.625rem] md:w-1/2 md:h-full md:p-[3.4375rem] ">
                  <div className="absolute top-[1.5rem] left-[1.875rem] md:hidden">
                    <Link
                      href="/"
                      className="w-6 relative block lg:w-[1.9375rem] before:content-[''] before:block before:w-full before:h-0 before:pb-[83.33333333333334%] md:before:hidden"
                    >
                      <Image
                        src="/images/logo.svg"
                        alt="ヘッダーロゴ"
                        fill
                        className="object-contain"
                        onClick={toggleNavbar}
                      />
                    </Link>
                  </div>
                  <div className="w-[.9375rem] h-4 cursor-pointer absolute top-6 right-[1.4375rem] md:top-[2.0625rem] md:right-[2.875rem]">
                    <Image
                      src="/images/close.svg"
                      alt="閉じる"
                      fill
                      className="object-contain"
                      onClick={toggleNavbar}
                    />
                  </div>
                  <div className="md:w-[20.875rem]">
                    <nav className="flex md:justify-between">
                      <ul className="pr-[3.375rem] text-[1rem] tracking-[.03em] leading-[1.3125] text-[#222] md:text-[1.375rem] md:tracking-[.06em] md:leading-[1.272727272727273] md:p-0">
                        <li>
                          <Link
                            href="/"
                            className="hidden md:block"
                            onClick={toggleNavbar}
                          >
                            Home
                          </Link>
                        </li>
                        <li className="m-0 md:mt-5">
                          <Link href="/salons/" onClick={toggleNavbar}>
                            Salon
                          </Link>
                        </li>
                        <li className="mt-[.625rem] md:mt-5">
                          <Link href="/hairmake/" onClick={toggleNavbar}>
                            Hairmake
                          </Link>
                        </li>
                        <li className="mt-[.625rem] md:mt-5">
                          <Link href="/information/" onClick={toggleNavbar}>
                            Information
                          </Link>
                        </li>
                        <li className="mt-[.625rem] md:mt-5">
                          <Link href="/recruit/" onClick={toggleNavbar}>
                            Recruit
                          </Link>
                        </li>
                      </ul>
                      <ul className="pr-[3.375rem] text-[.6875rem] tracking-[.06em] leading-[1.272727272727273] text-[#999] md:text-[.8125rem] md:tracking-[.06em] md:leading-[1.230769230769231] md:p-0">
                        <li>
                          <Link href="/nailschool/" onClick={toggleNavbar}>
                            Nail School
                          </Link>
                        </li>
                        <li className="md:mt-3 mt-[.625rem]">
                          <Link href="/bridal/" onClick={toggleNavbar}>
                            Bridal + LIM
                          </Link>
                        </li>
                        <li className="md:mt-[1.8125rem] mt-5">
                          <Link href="/company/" onClick={toggleNavbar}>
                            Company
                          </Link>
                        </li>
                        <li className="md:mt-3 mt-[.625rem]">
                          <Link href="/overseas/" onClick={toggleNavbar}>
                            Overseas
                          </Link>
                        </li>
                        <li className="md:mt-[1.8125rem] mt-5">
                          <Link href="/policy/" onClick={toggleNavbar}>
                            Privacy policy
                          </Link>
                        </li>
                      </ul>
                    </nav>
                    <div className="text-[.6875rem] tracking-[.02em] leading-[1.272727272727273] text-[#222] mt-12 md:mt-[5.625rem]">
                      <div className="text-[.75rem] tracking-[.04em] leading-[1.166666666666667] mb-[.90625rem] md:text-[.8125rem] md:mb-[1.03125rem]">
                        For new customer
                      </div>
                      <div>
                        <p>
                          <Link href="/hajimete/" onClick={toggleNavbar}>
                            始めてヘアサロンをご利用の方へ
                          </Link>
                        </p>
                        <p className="mt-[.78125rem] md:mt-[.90625rem]">
                          <Link href="/hajimete/nail/" onClick={toggleNavbar}>
                            始めてネイル・アイラッシュサロンをご利用の方へ
                          </Link>
                        </p>
                        <p className="mt-[.78125rem] md:mt-[.90625rem]">
                          <Link href="/hajimete/espa/" onClick={toggleNavbar}>
                            始めてエスパサロンをご利用の方へ
                          </Link>
                        </p>
                      </div>
                    </div>
                    <Link
                      href="/reserve/"
                      className="flex justify-center items-center border border-[#ddd] text-[.9375rem] w-full h-[3.875rem] mt-[2.40625rem] md:hidden"
                      onClick={toggleNavbar}
                    >
                      Reservation
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block md:relative md:flex-[1_1_auto] lg:w-1/2 lg:flex-auto">
                  <Image
                    src="/images/menu.jpg"
                    alt="メニューイメージ"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
