export const dynamic = "force-dynamic";
export const revalidate = 0;

import { Suspense } from "react";
import Spinner from "@/_components/common/Spinner";
import Cards from "@/_components/Cards";
import CategorySelectBox from "@/_components/CategorySelectBox";
import { getAllCategory, getAllInformation } from "@/_libs/client";

const InformationHome = async () => {
  const [categories, information] = await Promise.all([
    getAllCategory({
      orders: "-publishedAt", // 最新順
    }),
    getAllInformation({
      limit: 100,
      orders: "-publishedAt", // 最新順
    }),
  ]);

  // console.log(`categories: ${JSON.stringify(categories.contents, null, 2)}`);
  // console.log(`information: ${JSON.stringify(information.contents, null, 2)}`);

  return (
    <div className="pt-[3.9375rem] md:pt-[4.375rem] lg:pt-[5.1875rem]">
      <main className="pt-[2.875rem] pb-[5rem] px-[1.875rem] md:pt-[3.75rem] md:pb-20 md:px-[3.4375rem] lg:pt-[4.6875rem] lg:pb-[9.375rem] lg:px-[10vw] lg:max-w-[1670px] lg:my-0 lg:mx-auto xl:pt-[5.688622754491018vw] xl:pb-[11.377245508982035vw] xl:px-[13.541666666666666vw]">
        <header>
          <h1 className="text-[1.5rem] tracking-[.04em] leading-[1.291666666666667] mb-[2.125rem] md:text-[2.125rem] md:leading-[1.264705882352941] md:mb-[2.65625rem] lg:text-[2.25rem] lg:leading-[1.277777777777778] lg:mb-[3.90625rem]">
            INFORMATION
          </h1>
        </header>
        <Suspense fallback={<Spinner />}>
          <CategorySelectBox categories={categories.contents} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Cards information={information.contents} />
        </Suspense>
      </main>
    </div>
  );
};

export default InformationHome;
