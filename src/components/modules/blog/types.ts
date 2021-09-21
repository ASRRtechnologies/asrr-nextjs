export interface Card {
    title: string;
    image_webp: string;
    image: string;
    alt: string;
    text: string;
}

export interface Tag {
    tag: string;
}

export interface Technology {
    technologies: string;
}

export interface Info {
    date: string;
    client: string;
    author: string;
    tag: Tag[];
    technologies: Technology[];
}

export interface PortfolioCardProps {
    title: string;
    slug: string;
    card: Card;
    info: Info;
    basePath?: string,
}
