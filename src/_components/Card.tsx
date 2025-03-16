"use client";

import Image from "next/image";
import Link from "next/link";
import { Information, Recruit } from "@/_libs/client";
import { motion } from "framer-motion";

type InfoOrRecruit = Information | Recruit;

const Card = ({ content }: { content: InfoOrRecruit }) => {
  const DEFAULTIMAGE = "/images/default.jpg";

  const linkHref =
    "category" in content
      ? `/information/${content.id}`
      : `/recruit/${content.id}`;

  const imageUrl = content.thumbnail ? content.thumbnail.url : DEFAULTIMAGE;

  const showDescription =
    "description" in content && content.description ? content.description : "";

  let extraInfo = "";
  if ("category" in content) {
    extraInfo = content.category.title;
  } else {
    extraInfo = content.location;
  }

  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{
        opacity: 0.7,
        transition: { duration: 0.2 },
      }}
      className="md:w-[30.630630630630627%] md:pt-[6.306306306306306%] md:ml-[2.702702702702703%]"
    >
      <Link href={linkHref} className="block">
        <div className="block relative overflow-hidden mb-[.8125rem] md:md-[.9375rem] before:content-[''] before:block before:w-full before:h-0 before:pb-[60.317460317460316%] md:before:pb-[60.588235294117645%]">
          <Image
            src={imageUrl}
            alt={content.title || "Image"}
            fill
            className="object-cover"
          />
        </div>
        <div className="text-[.9375rem] tracking-[.04em] leading-[1.466666666666667] font-medium">
          {content.title}
        </div>
        {showDescription && (
          <div className="text-[.8125rem] leading-[1.846153846153846] mt-[.4375rem] md:text-[.75rem] md:leading-loose">
            {showDescription}
          </div>
        )}
        {"jobs" in content && content.jobs === false && (
          <small className="text-red-500">終了しました</small>
        )}
        {extraInfo && (
          <div className="text-[.8125rem] tracking-[.018em] leading-[1.153846153846154] text-[#999] mt-[.34375rem] md:text-[.6875rem] md:leading-[1.272727272727273]">
            {extraInfo}
          </div>
        )}
      </Link>
    </motion.li>
  );
};

export default Card;
