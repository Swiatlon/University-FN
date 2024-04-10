import './AnimatedCircles.scss';
import { AnimatePresence, motion } from 'framer-motion';

function AnimatedCircles() {
  const startingDegree = 0;
  const endDegree = 360;
  const startingBorderRadius = '50% 30% 70% 37% / 60% 44% 56% 59%';

  return (
    <>
      <AnimatePresence>
        <motion.div
          animate={{
            borderRadius: [startingBorderRadius],
            rotate: [startingDegree, endDegree],
          }}
          className="Circles BlueCircle"
          exit={{ opacity: '0' }}
          transition={{
            duration: 5,
            ease: 'linear',
            repeat: Infinity,
          }}
        />
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          animate={{
            borderRadius: [startingBorderRadius],
            rotate: [endDegree, startingDegree],
          }}
          className="Circles RedCircle"
          exit={{ opacity: 0 }}
          transition={{
            duration: 7,
            ease: 'linear',
            repeat: Infinity,
          }}
        />
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          animate={{
            borderRadius: [
              startingBorderRadius,
              '54% 100% 59% 82% / 60% 88% 27% 91%',
              '32% 20% 40% 33% / 40% 72% 48% 88%',
              '21% 45% 30% 51% / 40% 100% 48% 88%',
              '54% 55% 74% 10% / 60% 76% 27% 16%',
              startingBorderRadius,
            ],
            rotate: [startingDegree, endDegree],
          }}
          className="Circles YellowCircle"
          exit={{ display: 'none' }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </AnimatePresence>
    </>
  );
}

export default AnimatedCircles;
