import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedHero = () => {
  const container = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut"
            }
          });
        }
      },
      { threshold: 0.1 }
    );

    if (container.current) {
      observer.observe(container.current);
    }

    const currentElement = container.current;
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [controls]);

  return (
    <div ref={container} className="relative h-[60vh] bg-blue-600 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        className="relative text-white text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Utugi Secondary School</h1>
        <p className="text-xl md:text-2xl mb-8">Excellence in Education Since 1960</p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <a href="/admissions" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Join Us
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnimatedHero;
