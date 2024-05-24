import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const winHeight = window.innerHeight || document.documentElement.clientHeight;
        const docHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
        );

        const totalDocScrollLength = docHeight - winHeight;
        const scrollPostion = (scrollTop / totalDocScrollLength) * 100;

        setScrolled(scrollPostion > 1); // Change to true if scrolled more than 5%
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
           <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="navBarSmallScreen"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                    >
                        <div className="navBarSmallScreenContent">
                            <img
                                src="http://trx-effects.ancorathemes.com/wp-content/uploads/2021/04/logo-2x.png"
                                className="attachment-full size-full"
                                alt="ANCORA"
                                decoding="async"
                            />
                            <div className="navBarSmallLinks">Dummy Link 1</div>
                            <div className="navBarSmallLinks">Dummy Link 2</div>
                            <div className="navBarSmallLinks">Dummy Link 3</div>
                            <button className="navbarSmallBuyNow">Purchase now</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className={`navBar ${scrolled ? 'scrolled' : ''}`}>
                <div className="navBarLogo">
                    <img
                        src="http://trx-effects.ancorathemes.com/wp-content/uploads/2021/04/logo-2x.png"
                        className="navImage"
                        alt="ANCORA"
                        decoding="async"
                    />
                </div>
                <div className='navBarLinksContainer'>
                <div className="navBarLinks">DummyLink 1</div>
                <div className="navBarLinks">DummyLink 2</div>
                <div className="navBarLinks">DummyLink 3</div>
                <div className="navBarLinks">DummyLink 4</div>
                </div>
                <div className='navBarBuyNowContainer'>
                <button className="navbarBuyNow">Buy now</button>
                </div>
                <div
                    className="navBarHamburgerIcon"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        fontSize: '40px',
                        // display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: '-15px'
                    }}
                >
                    {isOpen ? 'X' : '☰'}
                </div>
            </div>
         
        </>
    );
};

export default Navbar;
