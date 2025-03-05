"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Card from "./Card";
import { Information } from "@/_libs/client";

const Cards = ({ information }: { information: Information[] }) => {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "";

  // カテゴリフィルタリング
  const filteredInformation = useMemo(() => {
    if (!currentCategory) return information; // パラメータが無い場合は全て表示
    return information.filter((data) => data.category.id === currentCategory);
  }, [currentCategory, information]);

  // console.log(
  //   `フィルタリング結果: ${JSON.stringify(filteredInformation, null, 2)}`
  // );

  return (
    <ul className="md:flex md:flex-wrap md:mt-[-6.481481481481481%] md:ml-[-2.777777777777778%] cards">
      {filteredInformation.map((data) => (
        <Card key={data.id} content={data} />
      ))}
    </ul>
  );
};

export default Cards;
