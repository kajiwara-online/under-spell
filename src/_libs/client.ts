import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type Category = {
  title: string;
} & MicroCMSListContent;

export type Information = {
  title: string;
  body: string;
  category: Category;
  description?: string;
  thumbnail?: MicroCMSImage;
} & MicroCMSListContent;

export type PaginationProps = {
  prevId?: string;
  nextId?: string;
};

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

// microCMS クライアントの作成
export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export const getAllInformation = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Information>({
    endpoint: "information",
    queries,
  });

  return listData;
};

export const getAllCategory = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Category>({
    endpoint: "categories",
    queries,
  });

  return listData;
};

// export const getAllInformation = async () => {
//   const listData = await client.getAllContents<Information>({
//     endpoint: "information",
//     queries: {
//       // cache: "no-store", // キャッシュを無効化して最新データを取得
//     },
//   });

//   return listData;
// };

// export const getInformationDetail = async (
//   informationId: string
// ): Promise<Information> => {
//   const detailData = await client.getListDetail<Information>({
//     endpoint: "information",
//     contentId: informationId,
//   });

//   return detailData;
// };

// const buildFilters = (category?: string) => {
//   if (category) {
//     return `category[contains]${category}`;
//   }
//   return undefined;
// };

// export const getInformations = async (
//   category?: string
// ): Promise<Information[]> => {
//   try {
//     const filters = buildFilters(category);

//     return await client.getAllContents<Information[]>({
//       endpoint: "information",
//       queries: {
//         filters: filters || undefined, // フィルター条件を設定
//         orders: "-publishedAt", // publishedAtの降順で取得
//       },
//     });
//   } catch (error: unknown) {
//     console.error("Error fetching informations:", error);
//     throw new Error("Failed to fetch informations.");
//   }
// };
