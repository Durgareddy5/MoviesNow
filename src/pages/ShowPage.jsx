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
    <div className="container">
      <button onClick={() => navigate(-1)}>← Back</button>
      <h1>{show.name}</h1>
      <img src={show.image?.original} width="300" />
      <p dangerouslySetInnerHTML={{ __html: show.summary }} />
    </div>
  );
}