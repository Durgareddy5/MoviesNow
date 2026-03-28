import { Link } from "react-router-dom";
import "./ShowCard.scss";

export default function ShowCard({ show }) {
  return (
    <Link to={`/show/${show.id}`} className="card">
      <img src={show.image?.medium} />
      <h3>{show.name}</h3>
    </Link>
  );
}