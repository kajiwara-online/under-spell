"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Aside = () => {
  return (
    <aside className="md:grid md:grid-rows-[auto_auto] md:grid-cols-[1fr_1fr_1fr]">
      <Link
        href="/reserve/"
        className="grid grid-rows-1 grid-cols-1 relative md:row-[1/2] md:col-[1/4]"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{
            opacity: 0.7,
            transition: { duration: 0.2 },
          }}
          className="row-[1/2] col-[1/2] z-[0]"
        >
          <picture className="w-full block relative overflow-hidden before:content-[''] before:block before:w-full before:h-0 before:pb-[48%] md:before:pb-[28.14814814814815%]">
            <source media="(min-width: 751px)" srcSet="/images/r.l.jpg" />
            <img
              src="/images/r.jpg"
              alt="サロンから予約する"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </picture>
        </motion.div>
        <div className="flex justify-center items-center flex-col row-[1/2] col-[1/2] z-[0] text-[#fff] text-[1.125rem] tracking-[.03em] leading-[1.166666666666667] text-center pointer-events-none lg:text-[1.375rem] xl:text-[1.75rem]">
          <b className="mb-[.5em]">RESERVATION</b>
          <p className="text-[.6875rem] leading-none md:text-[.75rem] xl:text-[.875rem]">
            サロンから予約する
          </p>
        </div>
      </Link>
      <Link href="/hajimete/" className="grid grid-rows-1 grid-cols-1 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{
            opacity: 0.7,
            transition: { duration: 0.2 },
          }}
          className="row-[1/2] col-[1/2] z-[0]"
        >
          <picture className="w-full block relative overflow-hidden before:content-[''] before:block before:w-full before:h-0 before:pb-[34.66666666666667%] md:before:pb-[62.22222222222222%]">
            <source media="(min-width: 751px)" srcSet="/images/h.l.jpg" />
            <img
              src="/images/h.jpg"
              alt="始めてヘアサロンをご利用の方へ"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </picture>
        </motion.div>
        <div className="flex justify-center items-center flex-col row-[1/2] col-[1/2] z-[0] text-[#fff] text-[1.125rem] tracking-[.03em] leading-[1.166666666666667] text-center pointer-events-none lg:text-[1.375rem] xl:text-[1.75rem]">
          <b className="mb-[.5em]">HAIR SALON</b>
          <p className="text-[.6875rem] leading-none md:text-[.75rem] xl:text-[.875rem]">
            始めてヘアサロンをご利用の方へ
          </p>
        </div>
      </Link>
      <Link
        href="/hajimete/nail/"
        className="grid grid-rows-1 grid-cols-1 relative"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{
            opacity: 0.7,
            transition: { duration: 0.2 },
          }}
          className="row-[1/2] col-[1/2] z-[0]"
        >
          <picture className="w-full block relative overflow-hidden before:content-[''] before:block before:w-full before:h-0 before:pb-[34.66666666666667%] md:before:pb-[62.22222222222222%]">
            <source media="(min-width: 751px)" srcSet="/images/n.l.jpg" />
            <img
              src="/images/n.jpg"
              alt="始めてネイル・アイラッシュサロンをご利用の方へ"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </picture>
        </motion.div>
        <div className="flex justify-center items-center flex-col row-[1/2] col-[1/2] z-[0] text-[#fff] text-[1.125rem] tracking-[.03em] leading-[1.166666666666667] text-center pointer-events-none lg:text-[1.375rem] xl:text-[1.75rem]">
          <b className="mb-[.5em]">NAIL & EYELASH SALON</b>
          <p className="text-[.6875rem] leading-none md:text-[.75rem] xl:text-[.875rem]">
            始めてネイル・アイラッシュサロンをご利用の方へ
          </p>
        </div>
      </Link>
      <Link
        href="/hajimete/espa/"
        className="grid grid-rows-1 grid-cols-1 relative"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{
            opacity: 0.7,
            transition: { duration: 0.2 },
          }}
          className="row-[1/2] col-[1/2] z-[0]"
        >
          <picture className="w-full block relative overflow-hidden before:content-[''] before:block before:w-full before:h-0 before:pb-[34.66666666666667%] md:before:pb-[62.22222222222222%]">
            <source media="(min-width: 751px)" srcSet="/images/e.l.jpg" />
            <img
              src="/images/e.l.jpg"
              alt="始めてエスパサロンをご利用の方へ"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </picture>
        </motion.div>
        <div className="flex justify-center items-center flex-col row-[1/2] col-[1/2] z-[0] text-[#fff] text-[1.125rem] tracking-[.03em] leading-[1.166666666666667] text-center pointer-events-none lg:text-[1.375rem] xl:text-[1.75rem]">
          <b className="mb-[.5em]">ESPA SALON</b>
          <p className="text-[.6875rem] leading-none md:text-[.75rem] xl:text-[.875rem]">
            始めてエスパサロンをご利用の方へ
          </p>
        </div>
      </Link>
    </aside>
  );
};

export default Aside;
