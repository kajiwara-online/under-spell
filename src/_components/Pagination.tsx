import { PaginationProps } from "@/_libs/client";
import Link from "next/link";

const Pagination = ({ prevId, nextId }: PaginationProps) => {
  return (
    <div className="flex justify-between items-center py-4 border-t mt-8">
      {/* 次の記事 */}
      {nextId ? (
        <Link
          href={`/information/${nextId}`}
          className="text-blue-500 hover:underline"
        >
          Next
        </Link>
      ) : (
        <span className="text-gray-400">Next</span>
      )}

      {/* 前の記事 */}
      {prevId ? (
        <Link
          href={`/information/${prevId}`}
          className="text-blue-500 hover:underline"
        >
          Prev
        </Link>
      ) : (
        <span className="text-gray-400">Prev</span>
      )}
    </div>
  );
};

export default Pagination;
