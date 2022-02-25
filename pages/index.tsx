import type { NextPage } from "next";

import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";
import { useState } from "react";

const Home: NextPage = () => {
  const [helper, setHelper] = useState(false);

  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.p}>Scrolleá, por favor...</p>
        <p className={styles.p2}>(si querés igual, obvio)</p>
        <p className={styles.p3}>(te podés quedar acá sino)</p>
        <motion.div
          className={styles.arrow}
          initial={{ y: -100 }}
          animate={{ y: [0, 50, 0], type: "loop" }}
          transition={{ repeat: Infinity }}
        >
          🔽
        </motion.div>
        <motion.h1
          onMouseEnter={() => setHelper(true)}
          onMouseLeave={() => setHelper(false)}
          className={styles.title}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          drag
          dragConstraints={{ top: 10, left: 10, right: 10, bottom: 10 }}
          whileDrag={{ scale: 0.5 }}
          whileHover={{ scale: 1.1, color: "deeppink" }}
          whileTap={{ scale: 0.9 }}
        >
          testing
        </motion.h1>
        {helper ? (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            Podés clickear y arrastrar este texto!
          </motion.div>
        ) : null}
      </div>
    </>
  );
};

export default Home;
