import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import './dynamic.css';

const DynamicBackground = () => {
  const container = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });
  const scale = useTransform(scrollYProgress, [0, 0.01, 0.1, 0.2 , 0.7 ,0.85, 0.9, 1], [0.5, 3, 12, 22 , 22 , 10, 5, 1]);

  useEffect(() => {
    const img1 = img1Ref.current;
    const img2 = img2Ref.current;

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    if (img1) observer.observe(img1);
    if (img2) observer.observe(img2);

    return () => {
      if (img1) observer.unobserve(img1);
      if (img2) observer.unobserve(img2);
    };
  }, []);

  return (
    <div ref={container} className='dynamicBackground'>
      <div className='dynamicContent'>
        <div style={{ width: '100vw', height: '80vh', display: 'flex',flexDirection: "column"  ,justifyContent: 'space-between', alignItems: 'center', padding :"40px" }}>
          <div >
            {/* Add arrow SVG here */}
            <svg
            className='downArrow'
              width="100"
              height="100"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 20L12 4"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 14L12 20L18 14"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>Dynamic Background</div>
        </div>
        <div className='dynamicImage'>
          <div className='imageContainer'>
            <img ref={img1Ref} className='img1' src="http://trx-effects.ancorathemes.com/wp-content/uploads/2021/04/eff-2.png" alt="" />
            <img ref={img2Ref} className='img2' src="http://trx-effects.ancorathemes.com/wp-content/uploads/2021/04/111mask.png" alt="" />
          </div>
          <div className='dynamicImageText'>
            <h4>Image hovers with OpenGL effects</h4>
            <p>Amazing image hover effects for creatives. Make your website stand out from the crowd!</p>
          </div>
        </div>
      </div>
      <motion.div style={{ scale }} className='dynamicBackgroundTarget' />
    </div>
  );
};

export default DynamicBackground;
