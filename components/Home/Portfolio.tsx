import React from "react";
import cn from "classnames";
import Image from "next/image";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../constants";
import Slider from "../Shared/Slider/Slider";
import useSlider from "../Shared/Slider/Hooks/useSlider";
import Left from "../../assets/img/home/left.svg";
import Right from "../../assets/img/home/right.svg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import styles from "./Portfolio.module.scss";

const SLIDE_SIZE = 300;
const SLIDE_GAP = 20;
const SLIDER_OFFSET = 2;

type Project = {
  id: number;
  name: string;
  category: string;
  previewUrl: string;
  description: string;
};

const Portfolio = () => {
  const { data, loading, error } = useFetch<Project>(
    `${BASE_URL}/projects`,
    "GET"
  );

  const slideCount = data?.length || 0;

  const { activeSlide, nextSlide, previousSlide } = useSlider(
    SLIDER_OFFSET,
    slideCount - 1
  );

  const stepWidth =
    activeSlide * SLIDE_SIZE + SLIDE_GAP * activeSlide + SLIDE_GAP * 4;

  const { width } = useWindowDimensions();

  const isDesktop = width ? width >= 1440 : false;

  if (!data || data.length === 0) return <p>No results</p>;

  return (
    <div className={styles.portfolio}>
      <div className={styles.heading}>A Couple of Our Featured Projects</div>

      <div className={styles.sliderInfo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu
        erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis
        ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt eros.
      </div>

      {isDesktop && (
        <>
          <Slider
            items={data}
            activeSlideIndex={activeSlide}
            stepWidth={stepWidth}
          />

          <div className={styles.slideControls}>
            <div
              onClick={previousSlide.onClick}
              className={cn(styles.button, {
                [styles.disabled]: previousSlide.disabled,
              })}
            >
              <button className={styles.button}>
                <Left />
              </button>
            </div>

            <div className={styles.slideInfo}>
              <p>{data[activeSlide + SLIDER_OFFSET].name}</p>

              <p>{data[activeSlide + SLIDER_OFFSET].description}</p>
            </div>

            <div
              onClick={nextSlide.onClick}
              className={cn(styles.button, {
                [styles.disabled]: nextSlide.disabled,
              })}
            >
              <button className={styles.button}>
                <Right />
              </button>
            </div>
          </div>
        </>
      )}

      {!isDesktop && (
        <div className={styles.list}>
          {data.map((item) => {
            return (
              <div className={styles.work}>
                <Image src={item.previewUrl} width={300} height={200}></Image>
                <div className={styles.workInfo}>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.description}>{item.description}</div>
                </div>
                <div className={cn(styles.name, styles.mobileOnly)}>{item.name}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Portfolio;
