import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "../../constants";
import { motion } from "framer-motion";
import devices from "../../assets/img/home/devices.png";
import styles from "./Hero.module.scss";

const Hero = () => {
  const [innerWidth, setInnerWidth] = useState<number | null>(null);

  useEffect(() => {
    const { innerWidth: width } = window;
    setInnerWidth(width);
  }, []);

  if (!innerWidth) return null;

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <motion.div
          animate={{ scale: 2, translateY: "-50px" }}
          className={styles.devices}
        >
          <Image src={devices}></Image>
        </motion.div>
        <motion.div
          animate={{ x: innerWidth }}
          transition={{ delay: .5 }}
          className={styles.text}
        >
          <div
            style={{
              position: "relative",
              height: "50px",
              overflow: "hidden",
              left: `-${innerWidth}px`,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eu eratiuy lacus, vel congue mauris. Fusce velitaria
            justo, faucibus eu.
          </div>
        </motion.div>
        <Link href={ROUTES.work}>
          <motion.div
            animate={{ x: -innerWidth }}
            transition={{ delay: 1 }}
            className={styles.text}
          >
            <div
              style={{
                position: "relative",
                height: "50px",
                overflow: "hidden",
                right: `-${innerWidth}px`,
              }}
            >
              <div className={styles.button}>Browse Portfolio</div>
            </div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
