import { createClient } from "microcms-js-sdk";
import { notFound } from "next/navigation";

export type Information = {
  id: string;
  title: string;
  body: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  eyecatch?: { url: string }; // アイキャッチ画像のURL
  description?: string; // 記事の説明
  category?: { name: string }; // カテゴリ名
};

// クエリの型を定義
type Queries = {
  limit?: number;
  offset?: number;
  filters?: string;
  fields?: string;
};

// 環境変数のチェック (API_KEY と serviceDomain の両方)
if (
  !process.env.NEXT_PUBLIC_MICROCMS_API_KEY ||
  !process.env.NEXT_PUBLIC_SERVICE_DOMAIN
) {
  throw new Error("MICROCMS_API_KEY and SERVICE_DOMAIN are required");
}

// microCMS クライアントの作成
export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN!,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY!,
});

// 型ガード関数を定義
const isAxiosError = (
  error: unknown
): error is { response?: { status: number } } => {
  return typeof error === "object" && error !== null && "response" in error;
};

// インフォメーション一覧を取得
export const getInformation = async (queries?: Queries) => {
  try {
    const response = await client.getList<Information>({
      endpoint: "information",
      queries: {
        ...queries,
        fields:
          "id,createdAt,updatedAt,publishedAt,revisedAt,title,body,description,category,eyecatch",
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching information:", error);
    if (isAxiosError(error) && error.response?.status === 404) {
      notFound();
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};

// インフォメーションの詳細を取得
export const getInformationDetail = async (
  contentId: string,
  queries?: Queries
) => {
  try {
    const response = await client.getListDetail<Information>({
      endpoint: "information",
      contentId,
      queries: {
        ...queries,
        fields:
          "id,createdAt,updatedAt,publishedAt,revisedAt,title,body,description,category,eyecatch",
      },
    });
    return response;
  } catch (error) {
    console.error(`Error fetching information with ID ${contentId}:`, error);
    if (isAxiosError(error) && error.response?.status === 404) {
      notFound();
    } else {
      throw new Error("An unexpected error occurred.");
    }
  }
};
