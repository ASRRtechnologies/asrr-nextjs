// import React from 'react'
// import fallback from '#/logo/asrr-banner.jpg'
// import styled from '@emotion/styled'
// import ReadMore from '@/text/ReadMore'
// import useI18n from '../../hooks/use-i18n'
// import t from '../../hooks/translator'
//
// const InnerWrapper = styled('div')`
//         box-shadow: ${props => props.theme.card.shadow};
//         background: ${props => props.theme.card.background};
// `;
//
// function Card (props) {
// 	let {type, name, image, readMore} = props.blog;
//
// 	return (
// 		<div className="blog-card card-margin-bottom">
// 			<InnerWrapper className="blog-card-inner">
// 				<div className="blog-card-image">
// 					<img src={image ? image : fallback} alt="image"/>
// 				</div>
//
// 				<div className="blog-card-text">
// 					<h1 className="label">{t(`blog.types.${type}.name`)}</h1>
// 					<h2 className="subheader">{t(`blog.${type}.${name}.card.title`, 'en')}</h2>
// 					<p className="text">{t(`blog.${type}.${name}.card.description`)}</p>
// 					{readMore && <ReadMore noAnimation={true} className="read-more-portfolio" text={`blog.types.${type}.readMore`} to={`/blog/${type}/${name}`}/>}
// 				</div>
// 			</InnerWrapper>
// 		</div>
// 	)
// }
//
// export default Card


import React from 'react'
import fallback from '#/logo/asrr-banner.jpg'
import styled from '@emotion/styled'
import ReadMore from '@/text/ReadMore'
import t from '../../hooks/translator'
import Fade from "react-reveal/Fade"

const InnerWrapper = styled('div')`
        box-shadow: ${props => props.theme.card.shadow};
        background: ${props => props.theme.card.background};
`;

function Card(props) {
    let {type, name, image, readMore} = props.blog;

    return (
        <Fade delay={200} bottom>
            <div className="blog-card card-margin-bottom">

                <InnerWrapper className="blog-card-inner-wrapper">
                    <div className="blog-card-image">
                        <div className="blog-card-image-wrapper">
                            <img src={image ? image : fallback} alt="image"/>
                        </div>
                    </div>

                    <div className="blog-card-text">
                        <h1 className="label">{t(`blog.types.${type}.name`)}</h1>
                        <h2 className="subheader">{t(`blog.${type}.${name}.card.title`, 'en')}</h2>
                        <p className="text">{t(`blog.${type}.${name}.card.description`)}</p>
                        {readMore &&
                        <ReadMore noAnimation={true} className="read-more-portfolio"
                                  text={`blog.types.${type}.readMore`}
                                  to={`/blog/${type}/${name}`}/>}
                    </div>

                </InnerWrapper>

            </div>
        </Fade>
    )
}

export default Card
