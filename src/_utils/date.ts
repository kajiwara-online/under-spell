// 日付のフォーマットを定義
import { parseISO, format } from "date-fns";

export const formatDate = (dateString?: string) => {
  if (!dateString) {
    return "日付不明"; // 適当なデフォルト値
  }
  try {
    return format(parseISO(dateString), "yyyy.MM.dd");
  } catch {
    return "日付不明"; // 無効な場合も同様にデフォルト値
  }
};
