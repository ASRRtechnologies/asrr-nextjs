import React from 'react';
import Animation from "@/animation/Animation";

function BreadCrumb(props) {
    let {crumbs} = props;

    return (
        <Animation animation="fade" className="key-words">
            <div className="key-words-wrapper">
                {crumbs &&
                crumbs.map((crumb, i) => {
                    return <>
                        <p className="nextjs">
                            {crumb}
                        </p>
                        {i < crumbs.length - 1 && ">"}
                    </>
                })
                }
            </div>
        </Animation>
    );
}

export default BreadCrumb;