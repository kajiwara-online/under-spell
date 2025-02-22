"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Category } from "@/_libs/client";

const CategorySelectBox = ({ categories }: { categories: Category[] }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const selectedCategory = searchParams.get("category") || "";

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const params = new URLSearchParams(searchParams);
      const value = e.target.value;

      if (value) {
        params.set("category", value);
      } else {
        params.delete("category");
      }

      replace(`${pathname}?${params.toString()}`);
    },
    [searchParams, pathname, replace]
  );

  return (
    <div className="flex items-center lg:mb-[70px] md:mb-[clamp(55px,7.3vw,70px)] mb-[clamp(43.75px,13.4vw,100px)]">
      <label
        htmlFor="category"
        className="lg:pr-5 md:pr-[clamp(15.65px,2.1vw,1.25rem)]"
      >
        Category:
      </label>
      <div>
        <select
          name="category"
          id="category"
          value={selectedCategory}
          onChange={handleChange}
          className="w-40 border-b border-[#ddd] overflow-hidden"
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CategorySelectBox;
