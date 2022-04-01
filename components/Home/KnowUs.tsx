import React, { useState } from "react";
import cn from "classnames";
import Modal from "../Shared/Modal/Modal";
import YoutubeEmbed from "../Shared/YoutubeEmbedd/YoutubeEmbed";
import Play from "../../assets/img/home/play.svg";
import styles from "./KnowUs.module.scss";

const KnowUs = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Modal
        title="Title"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(!isModalOpen)}
      >
        <YoutubeEmbed embedId={"dQw4w9WgXcQ"}></YoutubeEmbed>
      </Modal>

      <div className={styles.knowUs}>
        <div className={styles.play}>
          <Play
            className={styles.playIcon}
            onClick={() => setIsModalOpen(true)}
          ></Play>
        </div>

        <div className={cn(styles.info, styles.mobileOnly)}>
          <div className={styles.heading}>Get To Know Us a Little Better!</div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
            faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
            mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet
            congue ut, luctus a nulla. Donec sit amet sapien neque, id
            ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a
            elit congue lacinia.
            <br />
            <br />
            Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla.
            Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi.
            Pellentesque pellentesque arcu a elit congue lacinia.
          </div>
        </div>
      </div>
    </>
  );
};

export default KnowUs;
