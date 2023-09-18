import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="header wrapper">
        <h1 className="logo">
          <Link to="/">LOGO</Link>
        </h1>
      </nav>
    </>
  );
}
