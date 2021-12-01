export type Card = {
  title: string;
  text: string;
  image: string;
  alt: string;
};

export type Info = {
  date: string;
  author: string;
  client: string;
  tags: string[];
};

export interface GeneralArticleProps {
  title: string;
  slug: string;
  card: Card;
  info: Info;
  type?: string;
  basePath?: string;
}
