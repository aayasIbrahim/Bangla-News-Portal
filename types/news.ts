
export interface INews {
  _id: string;
  title: string;
  summary: string;
  content?: string;
  category: string;
  imageSrc: string;
  author?: string;
  publishedAt?: Date;
  updatedAt?: Date;
  tags?: string[];
  isFeatured?: boolean;
}
