import "./Link.css";
export default function Link(props) {
  return (
    <a href="/signup" className="signup-link">
      {props.content}
    </a>
  );
}
