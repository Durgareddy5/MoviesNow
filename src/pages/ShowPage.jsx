import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getShowById } from "../api/tvActions";

export default function ShowPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(null);

  useEffect(() => {
    getShowById(id).then(setShow);
  }, [id]);

  if (!show) return <p>Loading...</p>;

  return (
  <div className="show-detail">

    <button onClick={() => navigate(-1)} className="back-btn">
      ← Back
    </button>

    <div className="show-container">

      {/* IMAGE */}
      <div className="image-box">
        <img src={show.image?.original} alt={show.name} />
      </div>

      {/* DETAILS */}
      <div className="details">
        <h1>{show.name}</h1>

        <p className="rating">
          ⭐ {show.rating?.average || "N/A"}
        </p>

        <p className="genres">
          🎭 {show.genres.join(", ")}
        </p>

        <p>📺 Status: {show.status}</p>
        <p>🗓️ Premiered: {show.premiered}</p>
        <p>⏱️ Runtime: {show.runtime} mins</p>
        <p>🗣️ Language: {show.language}</p>

        <p>
          🏢 Network: {show.network?.name || "N/A"}
        </p>

        {show.officialSite && (
          <a
            href={show.officialSite}
            target="_blank"
            className="link"
          >
            🌐 Official Site
          </a>
        )}

        <div
          className="summary"
          dangerouslySetInnerHTML={{ __html: show.summary }}
        />
      </div>

    </div>
  </div>
);
}