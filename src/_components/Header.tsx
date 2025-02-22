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
    <header className="fixed bg-white top-0 left-0 w-full lg:h-20 md:h-[clamp(3rem,8vw,5rem)] h-[15vw] z-50">
      <nav className="h-full w-full flex items-center justify-between md:px-12 md:py-5 px-[4vw] py-[2vw]">
        <Link href="/" className="h-full flex items-center" aria-label="ホーム">
          <figure className="h-full flex items-center">
            <Image
              src="/images/HeaderLogo.png"
              alt="ヘッダーロゴ"
              width={350}
              height={250}
              className="h-full w-full min-h-[10px] min-w-[14px] max-h-[45px] max-w-[63px]"
            />
          </figure>
        </Link>

        <div className="h-full flex items-center">
          <ul className="hidden lg:flex items-center space-x-8">
            <li>
              <Link href="/" className="">
                Home
              </Link>
            </li>
            <li>
              <Link href="/salon" className="">
                Salon
              </Link>
            </li>
            <li>
              <Link href="/hairmake" className="">
                Hairmake
              </Link>
            </li>
            <li>
              <Link href="/information" className="">
                Information
              </Link>
            </li>
            <li>
              <Link href="/recruit" className="">
                Recruit
              </Link>
            </li>
          </ul>
          <Link
            href="/reservation"
            className="h-auto text-[clamp(5px,3.7vw,1.5rem)] md:border border-gray-300 px-6 py-2 max-md:p-0 mx-14 max-md:ml-0 max-md:mr-[2.5vw] lg:text-[1rem] md:text-[clamp(0.5rem,1.5vw,1rem)]"
          >
            Reservation
          </Link>

          <div className="h-full">
            <button
              className="h-full block"
              onClick={toggleNavbar}
              aria-label="メニューを開く"
            >
              <svg
                className="h-full w-full max-h-[25px] max-w-[25px] min-h-[8px] min-w-[8px]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

            {/* オーバーレイメニュー */}
            {(openMenu || isAnimating) && (
              <div
                className={`fixed inset-0 bg-white z-50 flex ${
                  openMenu && isAnimating
                    ? "animate-fadeIn"
                    : !openMenu && isAnimating
                    ? "animate-fadeOut"
                    : ""
                }`}
              >
                <div className="h-full w-1/2">
                  <Image
                    src="/images/menu.jpg"
                    alt="メニューイメージ"
                    width={1400}
                    height={1518}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="flex justify-center items-center h-full w-1/2 relative">
                  <button
                    className="absolute top-7 right-10"
                    onClick={toggleNavbar}
                    aria-label="メニューを閉じる"
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="w-3/5">
                    <div className="flex justify-between">
                      <ul className="flex flex-col gap-2">
                        <li>
                          <Link
                            href="/"
                            className="text-2xl hover:underline block"
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/salon"
                            className="text-2xl hover:underline block"
                          >
                            Salon
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/hairmake"
                            className="text-2xl hover:underline block"
                          >
                            Hairmake
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/information"
                            className="text-2xl hover:underline block"
                          >
                            Information
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/recruit"
                            className="text-2xl hover:underline block"
                          >
                            Recruit
                          </Link>
                        </li>
                      </ul>
                      <ul className="flex flex-col gap-4">
                        <li>
                          <Link
                            href="/nailschool"
                            className="text-sm text-gray-400 hover:underline block"
                          >
                            Nail School
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/bridal"
                            className="text-sm text-gray-400 hover:underline block"
                          >
                            Bridal + LIM
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/company"
                            className="text-sm text-gray-400 hover:underline block"
                          >
                            Company
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/overseas"
                            className="text-sm text-gray-400 hover:underline block"
                          >
                            Overseas
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/policy"
                            className="text-sm text-gray-400 hover:underline block"
                          >
                            Privacy policy
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-20 text-sm">
                      <div className="mb-3">For new customer</div>
                      <p className="underline hover:no-underline mb-2">
                        <Link href="/hajimete">
                          始めてヘアサロンをご利用の方へ
                        </Link>
                      </p>
                      <p className="underline hover:no-underline mb-2">
                        <Link href="/hajimete/nail">
                          始めてネイル・アイラッシュサロンをご利用の方へ
                        </Link>
                      </p>
                      <p className="underline hover:no-underline mb-2">
                        <Link href="/hajimete/espa">
                          始めてエスパサロンをご利用の方へ
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
