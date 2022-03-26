import NotFound from "../assets/img/404.svg";

export default function Custom404() {
  // svg design by Freepic
  return (
    <div
      style={{ marginBottom: "25px", display: "flex", flexDirection: "column", alignItems: "center"}}
    >
      <NotFound width={940}></NotFound>
      <span style={{ color: "#dadada" }}>SVG design by Freepic</span>
    </div>
  );
}
