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

export interface PortfolioCardProps {
  title: string;
  slug: string;
  card: Card;
  info: Info;
  basePath?: string;
}

export interface PortfolioHighlightProps {
  card: {
    alt: string;
    client: string;
    text: string;
    url: string;
    title: string;
    type: string;
    image: string;
    description: string;
  };
  info: {
    client: string;
    date: string;
    author: string;
    tags: string;
  };
  title: string;
  reverse: boolean;
  basePath: string;
}

export type StyledPortfolioHighlightProps = {
  theme?: {
    card: {
      shadow: string;
    };
  };
};
