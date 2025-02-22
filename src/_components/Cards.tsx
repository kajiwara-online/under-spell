"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Card from "./Card";
import { Information } from "@/_libs/client";

const Cards = ({ information }: { information: Information[] }) => {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "";
  // console.log(`URLのcategoryパラメータ: ${currentCategory}`);

  // カテゴリフィルタリング
  const filteredInformation = useMemo(() => {
    if (!currentCategory) return information; // パラメータが無い場合は全て表示
    return information.filter((data) => data.category.id === currentCategory);
  }, [currentCategory, information]);

  // console.log(
  //   `フィルタリング結果: ${JSON.stringify(filteredInformation, null, 2)}`
  // );

  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {filteredInformation.map((information) => (
        <Card key={information.id} information={information} />
      ))}
    </ul>
  );
};

export default Cards;
