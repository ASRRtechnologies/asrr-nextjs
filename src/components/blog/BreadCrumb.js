import React from 'react';

function BreadCrumb(props) {
    let {crumbs} = props;

    return (
        <div  className="key-words">
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
        </div>
    );
}

export default BreadCrumb;