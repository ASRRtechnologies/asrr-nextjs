import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import PictureFallback from '@/utillities/titles/PictureFallback'
import {useTheme} from '../../context/theme/ThemeContext'

const Card = styled('div')`
  box-shadow: ${props => props.theme.card.background};
  background-color: ${props => props.theme.card.background};
`;

function BlogCard({article, info, type, name}) {
    const darkmode = useTheme().dark;
    const {tag, author, date} = info;
    const {alt, image, image_webp, text, title} = article;
    const fileName = name.toLowerCase();

    const getProperUrl = () => {
        switch (type.toLowerCase()) {
            case 'artikel':
                return `blog/artikel/${fileName}`;
            case 'nieuws':
                return `blog/nieuws/${fileName}`;
            default :
                return `blog`
        }
    };

    const getProperBaseUrl = () => {
        switch (type) {
            case 'artikel':
                return `content/written/artikel/nl/${fileName}`;
            case 'nieuws':
                return `content/written/nieuws/nl/${fileName}`;
            default :
                return `content/written/artikel/nl/${fileName}`
        }
    };

    const ReadMore = ({to, text}) => {
        return (
            <Link href={to}>
                <a className={`font-card-read-more read-more ${darkmode
                    ? 'animated-link-light'
                    : 'animated-link-dark'}`}>
                    Lees meer
                </a>
            </Link>
        )
    };

    return (
        <Link href={getProperUrl()}>
            <a>
                <Card className="card-rectangle">

                    <div className="card-rectangle-image">
                        <div className="card-rectangle-image-aspect-ratio zoom-in-effect-minimal">
                            <PictureFallback image={`${getProperBaseUrl()}/${image_webp}`}
                                             fallbackImage={`${getProperBaseUrl()}/${image}`}
                                             alt={alt}/>
                        </div>
                    </div>

                    <div className="card-rectangle-text-container">

                        <div className="card-rectangle-text">
                            <div className="card-rectangle-tags">
                                {tag && tag.map(({tag}) => {
                                    return (
                                        <span>
											<h5>{tag}</h5>
										</span>
                                    )
                                })}
                            </div>
                            <h4>{date}</h4>
                            <h2 className="bold">{title}</h2>
                            <p>{text}</p>
                        </div>

                        <span>
                            {/*<h4>{author}</h4>*/}
                            <ReadMore to={getProperUrl()}/>
						</span>

                    </div>

                </Card>
            </a>
        </Link>
    )
}

export default BlogCard
