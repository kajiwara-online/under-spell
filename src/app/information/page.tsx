"use client";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { getInformation, Information } from "~/libs/client"; // Information 型をインポート
import { Cards } from "@/components/Cards";

const InformationHome = () => {
  const [contents, setContents] = useState<Information[]>([]); // 型定義を追加
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // フィルタの内容を確認
        console.log(
          "API Request Filter:",
          selectedCategory ? `category[equals]${selectedCategory}` : ""
        );

        const informationResponse = await getInformation({
          filters: selectedCategory
            ? `category[equals]${selectedCategory}`
            : "",
        });

        // データが取得できているか確認
        console.log("Information Response:", informationResponse);

        setContents(informationResponse.contents);

        // カテゴリーの重複を排除してリストを作成
        const uniqueCategories = Array.from(
          new Set(
            informationResponse.contents
              .map((content) => content.category?.[0]) // 配列の最初の要素を取得
              .filter((category): category is string => category !== undefined)
          )
        );
        setCategories(uniqueCategories);

        // categoriesの内容を確認
        console.log("Categories:", uniqueCategories);
      } catch (error) {
        console.error("Error fetching information:", error); // エラーログの確認
        notFound();
      }
    };

    fetchData();
  }, [selectedCategory]);

  // selectedCategoryの内容を確認
  console.log("Selected Category:", selectedCategory);

  if (!contents.length) {
    return <h1>No Contents</h1>;
  }

  return (
    <div className="p-24">
      <h1 className="text-4xl mb-14">INFORMATION</h1>
      <div>
        <label htmlFor="category" className="mr-4">
          Category:
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            // プルダウンが選択されたときにカテゴリの値を確認
            console.log("Category selected:", e.target.value);
          }}
          className="border p-2"
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <Cards contents={contents} />
    </div>
  );
};
export default InformationHome;
