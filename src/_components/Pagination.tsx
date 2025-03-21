import { PaginationProps } from "@/_libs/client";
import Link from "next/link";

const Pagination = ({ prevId, nextId, type }: PaginationProps) => {
  // 動的にURLを生成
  const nextUrl = nextId ? `/${type}/${nextId}` : undefined;
  const prevUrl = prevId ? `/${type}/${prevId}` : undefined;

  return (
    <div className="flex justify-between items-center py-4 border-t mt-8">
      {/* 次の記事 */}
      {nextUrl ? (
        <Link href={nextUrl} className="hover:underline">
          Next
        </Link>
      ) : (
        <span></span>
      )}

      {/* 前の記事 */}
      {prevUrl ? (
        <Link href={prevUrl} className="hover:underline">
          Prev
        </Link>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default Pagination;
