import { motion, AnimatePresence } from 'framer-motion';
import './AnimatedCircles.scss';

function AnimatedCircles() {
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="Circles BlueCircle"
          animate={{
            borderRadius: ['50% 30% 70% 37% / 60% 44% 56% 59%'],
            rotate: [0, 360],
          }}
          transition={{
            ease: 'linear',
            duration: 5,
            repeat: Infinity,
          }}
          exit={{ opacity: '0' }}
        />
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          className="Circles RedCircle"
          animate={{
            borderRadius: ['50% 30% 70% 37% / 60% 44% 56% 59%'],
            rotate: [360, 0],
          }}
          transition={{
            ease: 'linear',
            duration: 7,
            repeat: Infinity,
          }}
          exit={{ opacity: 0 }}
        />
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          className="Circles YellowCircle"
          animate={{
            borderRadius: [
              '50% 30% 70% 37% / 60% 44% 56% 59%',
              '54% 100% 59% 82% / 60% 88% 27% 91%',
              '32% 20% 40% 33% / 40% 72% 48% 88%',
              '21% 45% 30% 51% / 40% 100% 48% 88%',
              '54% 55% 74% 10% / 60% 76% 27% 16%',
              '50% 30% 70% 37% / 60% 44% 56% 59%',
            ],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10,
            repeatType: 'reverse',
            repeat: Infinity,
          }}
          exit={{ display: 'none' }}
        />
      </AnimatePresence>
    </>
  );
}

export default AnimatedCircles;
