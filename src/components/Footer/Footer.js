import "./Footer.css";

export default function Footer() {
  const d = new Date();
  return (
    <footer className="footer">
      <p>&copy; Copyright Helt {d.getFullYear()}. All right Reserved</p>
    </footer>
  );
}
