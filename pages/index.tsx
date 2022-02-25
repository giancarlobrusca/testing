import type { NextPage } from "next";

import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.p}>Scroll down please...</p>
      <motion.div
        className={styles.arrow}
        initial={{ y: -100 }}
        animate={{ y: [0, 50, 0], type: "loop" }}
        transition={{ repeat: Infinity }}
      >
        🔽
      </motion.div>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        drag
        dragConstraints={{ top: 10, left: 10, right: 10, bottom: 10 }}
        whileDrag={{ scale: 0.5 }}
        whileHover={{ scale: 1.1, color: "deeppink" }}
        whileTap={{ scale: 0.9 }}
      >
        TESTING
      </motion.h1>
    </div>
  );
};

export default Home;
