import styles from "./YoutubeEmbed.module.scss";

type YoutubeEmbedProps = {
  embedId: string;
};

const YoutubeEmbed = ({ embedId }: YoutubeEmbedProps) => (
  <div className={styles.videoResponsive}>
    <iframe
      width="200"
      height="200"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
