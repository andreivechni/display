import React from "react";
import Heading from "../Shared/Heading/Heading";
import Image from "next/image";
import dude from "../../assets/img/about/dude.png";
import Gears from "../../assets/img/about/gears.svg";
import Camera from "../../assets/img/about/camera.svg";
import Magnifier from "../../assets/img/about/magnifier.svg";
import Window from "../../assets/img/about/window.svg";
import Tabs, { Tab } from "../Shared/Tabs";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.root}>
      <Heading>About My Business</Heading>
      <div className={styles.article}>
        <div className={styles.intro}>
          <div className={styles.introImg}>
            <Image
              // layout="fixed"
              // height={260}
              // width={380}
              src={dude}
              alt="cool busy young man"
            />
          </div>
          <div className={styles.introText}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
              faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
              mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet
              congue ut, luctus a nulla. Donec sit amet sapien neque, id
              ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a
              elit congue lacinia.
            </p>
            <p>
              Nullam tellus turpis, fringilla sit amet congue ut, luctus a
              nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla
              facilisi. Pellentesque pellentesque arcu a elit congue lacinia.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
              faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
              mi, quis tincidunt eros. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
        </div>
        <div className={styles.statement}>
          <div className={styles.articleHeading}>mission statement</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
            faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
            mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet
            congue ut, luctus a nulla. Donec sit amet sapien neque, id
            ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a
            elit congue lacinia.
          </p>
        </div>
        <div className={styles.facts}>
          <div className={styles.articleHeading}>fun facts</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
            faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
            mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet
            congue ut, luctus a nulla. Donec sit amet sapien neque, id
            ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a
            elit congue lacinia.
          </p>
        </div>
        <div className={styles.articleHeading}>services</div>
      </div>
      <div className={styles.services}>
        <Tabs>
          <Tab label="Websites" icon={Gears}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
            faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
            mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet
            congue ut, luctus a nulla. Donec sit amet sapien neque, id
            ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a
            elit congue lacinia.
          </Tab>
          <Tab label="Photography" icon={Camera}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
            faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
            mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet
            congue ut, luctus a nulla. Donec sit amet sapien neque, id
            ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a
            elit congue lacinia.
            <ul className={styles.styledList}>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                fringilla sit amet.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus
                donec.
              </li>
            </ul>
          </Tab>
          <Tab label="SEO" icon={Magnifier}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
            faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
            mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet
            congue ut, luctus a nulla. Donec sit amet sapien neque, id
            ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a
            elit congue lacinia.
          </Tab>
          <Tab label="Applications" icon={Window}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
            faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
            mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet
            congue ut, luctus a nulla. Donec sit amet sapien neque, id
            ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a
            elit congue lacinia.
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default About;
