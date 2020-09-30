import React, { useEffect } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { motion } from 'framer-motion'

const textEasing = [.42, 0, .58, 1];
const fadeOut = {
    show: {
        opacity: 1,
        transition: {
            ease: textEasing,
            duration: 1
        }
    },
    hidden: {
        translateY: "100px",
        opacity: 0,
        transition: {
            duration: 1,
            ease: textEasing,
        }
    }
};

function Layout({children}) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div initial={"show"} exit="hidden" animate="show" variants={fadeOut} className="application">
            <Header/>
            {children}
            <Footer/>
        </motion.div>
    );
}

export default Layout;
