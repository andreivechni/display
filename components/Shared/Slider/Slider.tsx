import React from "react";
import styles from "./Slider.module.scss";

type SliderProps = {
  items: Array<any>;
  stepWidth: number;
  activeSlideIndex: number;
};

const Slider = ({ items, stepWidth, activeSlideIndex }: SliderProps) => {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <div
        className={styles.root}
        style={{
          transform: `translateX(${-stepWidth}px)`,
          gap: "20px",
          transition: "all .5s ease",
        }}
      >
        {items.map((item, i) => {
          return (
            <div key={item.id} className={styles.slide}>
              <img src={item.previewUrl} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
