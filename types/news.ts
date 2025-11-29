

export interface INews {
  _id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  imageSrc: string;
  author?: string;
  publishedAt?: Date;
  updatedAt?: Date;
  tags?: string[];
  isFeatured?: boolean;
}

export interface INewsPayload {
  _id?: string;            // Optional, only needed for updates
  title: string;
  summary: string;
  category: string;
  content: string;
  imageSrc: string;
  isFeatured?: boolean;
}

export interface INewsUpdatePayload {
  id: string;
  data: Partial<INewsPayload>;
}
export interface NewsHeadline {
  _id: string;
  title: string;
}
export interface NewsApiResponse {
  success: boolean;
  newsheadline: NewsHeadline[];
  data: INews[];
  totalCount: number;
  filteredCount: number;
}