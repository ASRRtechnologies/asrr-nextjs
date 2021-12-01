import { GeneralArticleProps } from '@/modules/shared/article/types';

export type PortfolioCardProps = GeneralArticleProps;

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
