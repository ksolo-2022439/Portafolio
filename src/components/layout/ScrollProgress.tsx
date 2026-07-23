import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setVisible(latest > 0.005);
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-sky-400 origin-left z-50"
      style={{ scaleX: scrollYProgress, opacity: visible ? 1 : 0 }}
    />
  );
}
