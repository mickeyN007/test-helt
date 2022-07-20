import "./ImageBox.css";

export default function imageBox(props) {
  return (
    <div className={props.name.toString()}>
      <img src={props.src} alt="" className="box-image" />
    </div>
  );
}
