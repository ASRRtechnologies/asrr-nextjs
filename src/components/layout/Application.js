import React from 'react'
import Footer from '../footer/Footer'

function Layout({children}) {

    return (
        <div className="application">
            {children}
        </div>
    );
}

export default Layout;
