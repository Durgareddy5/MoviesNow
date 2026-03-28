import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">🎬 TV Shows</Link>
    </div>
  );
}