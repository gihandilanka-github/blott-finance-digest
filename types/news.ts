export interface NewsItem {
  id?: string | number;
  thumbnail: string;
  source: string;
  date: string; // ISO string
  title: string;
  url: string;
}

