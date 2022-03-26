import React, { Children, ReactNode, useState } from "react";
import TabProps from "./Tab";
import cn from "classnames";
import styles from "./Tabs.module.scss";
import { motion, AnimatePresence } from "framer-motion";

type TabsProps = {
  children: ReactNode;
};

const Tabs = ({ children }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabs = Children.toArray(children);

  // @ts-ignore
  // eslint-disable-next-line react/prop-types
  const labels = tabs.map(({ props }: { props: TabProps }) => props.label);
  // @ts-ignore
  // eslint-disable-next-line react/prop-types
  const icons = tabs.map(({ props }: { props: TabProps }) => props.icon());

  if (!tabs.length) return null;

  return (
    <div className={styles.root}>
      <div className={styles.tabList}>
        {labels.map((label, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={i}
              className={cn(styles.label, { [styles.activeTab]: isActive })}
              onClick={() => {
                setActiveIndex(i);
              }}
            >
              {icons[i]}
              <span className={styles.desktopOnly}>{label}</span>
              {isActive && (
                <motion.div
                  className={cn(styles.background, styles.label)}
                  layoutId="background"
                ></motion.div>
              )}
            </div>
          );
        })}
      </div>

      <div className={styles.tabContainer}>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={activeIndex}
            className={styles.tabpanel}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 520,
              damping: 40,
            }}
          >
            {tabs[activeIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Tabs;
