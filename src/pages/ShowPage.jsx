import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getShowById } from "../api/tvActions";
import "./showpage.scss"; // Make sure to import the SCSS!

export default function ShowPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(null);

  useEffect(() => {
    getShowById(id).then(setShow);
  }, [id]);

  if (!show) return <div className="loading-screen">Loading...</div>;

  // Extract just the year for that classic Netflix look
  const releaseYear = show.premiered ? show.premiered.substring(0, 4) : "N/A";
  
  // Fake a match percentage based on the rating
  const matchPercentage = show.rating?.average ? Math.round(show.rating.average * 10) : 85;

  return (
    <div className="netflix-page">
      {/* Back Navigation Bar */}
      <div className="nav-header">
        <button onClick={() => navigate(-1)} className="back-btn">
          <span>←</span> Back to Browse
        </button>
      </div>

      {/* Hero Image with Vignette Fade */}
      <div className="hero-container">
        <div 
          className="hero-image"
          style={{ backgroundImage: `url(${show.image?.original})` }}
        />
        <div className="hero-vignette"></div>
      </div>

      {/* Main Content (Pulled up over the gradient) */}
      <div className="content-container">
        <h1 className="show-title">{show.name}</h1>

        {/* Netflix Meta Row */}
        <div className="meta-row">
          <span className="match-score">{matchPercentage}% Match</span>
          <span className="year">{releaseYear}</span>
          <span className="maturity-rating">{show.status === "Ended" ? "TV-MA" : "TV-14"}</span>
          <span className="duration">{show.runtime}m</span>
          <span className="hd-badge">HD</span>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="play-btn">
            <span>▶</span> Play
          </button>
          {show.officialSite && (
            <a href={show.officialSite} target="_blank" rel="noreferrer" className="more-info-btn">
              Official Site
            </a>
          )}
        </div>

        {/* Synopsis and Details Grid */}
        <div className="info-grid">
          <div className="left-col">
            <div 
              className="synopsis" 
              dangerouslySetInnerHTML={{ __html: show.summary }} 
            />
          </div>

          <div className="right-col">
            <div className="info-item">
              <span className="label">Cast: </span>
              <span className="value">Not available in this API, More names here...</span>
            </div>
            <div className="info-item">
              <span className="label">Genres: </span>
              <span className="value">{show.genres.join(", ")}</span>
            </div>
            <div className="info-item">
              <span className="label">Language: </span>
              <span className="value">{show.language}</span>
            </div>
            <div className="info-item">
              <span className="label">Network: </span>
              <span className="value">{show.network?.name || "N/A"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}