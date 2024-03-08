import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import useInView from "./useInView";

function AnimatedSlideInComponent({ direction, offset, children }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(inView);
  }, [inView]);

  const initial = { x: direction === "left" ? "-150%" : "150%", opacity: 0, scale: 0.8 };
  const animateProps = {
    x: animate ? "0%" : initial.x,
    opacity: animate ? 1 : initial.opacity,
    scale: animate ? 1 : initial.scale,
  };

  return (
    <div style={{ overflow: "hidden" }} ref={ref}>
      <motion.section
        initial={initial}
        animate={animateProps}
        transition={{ type: "spring", damping: 19 }}
      >
        {children}
      </motion.section>
    </div>
  );
}

AnimatedSlideInComponent.defaultProps = {
  direction: "left",
  offset: 30,
  children: null,
};

AnimatedSlideInComponent.propTypes = {
  direction: PropTypes.string,
  offset: PropTypes.number,
  children: PropTypes.node,
};

export default AnimatedSlideInComponent;
