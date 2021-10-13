export interface Card {
  title: string;
  image_webp: string;
  image: string;
  alt: string;
  text: string;
}

export interface Info {
  date: string;
  client: string;
  author: string;
  tags: string[];
}

export interface BlogCardProps {
  type: string;
  title: string;
  slug: string;
  card: Card;
  info: Info;
  basePath?: string;
}
