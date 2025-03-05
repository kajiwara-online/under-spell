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
    <div className="mb-[3.125rem] md:mb-[4.375rem] flex items-center">
      <label htmlFor="category" className="w-[5.125rem] md:w-auto pr-5">
        Category:
      </label>
      <div className="w-[14.5625rem] border-b border-[#ddd] relative overflow-hidden align-bottom text-[.8125rem] tracking-[.03em] leading-[2.769230769230769] md:w-40  after:content-[''] after:block after:absolute after:top-1/2 after:right-[.0625rem] after:mt-[-.21875rem] after:pointer-events-none after:w-[.5rem] after:h-[.4375rem] after:align-middle after:bg-no-repeat after:bg-center after:bg-contain after:bg-[url('data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2aWV3Qm94PScwIDAgOCA3JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc4JyBoZWlnaHQ9JzcnPjxwYXRoIGQ9J200IDctMy44NzktN2g3Ljc1OHonIGZpbGw9JyNiMWIxYjEnLz48L3N2Zz4=')]">
        <select
          name="category"
          id="category"
          value={selectedCategory}
          onChange={handleChange}
          className="font-[inherit] text-inherit text-[1em] py-[.4375rem] pr-8 pl-0 border-0 w-full bg-transparent appearance-none outline-none cursor-pointer"
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
