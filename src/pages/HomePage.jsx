import { useEffect, useState } from "react";
import { getShows, searchShows } from "../api/tvActions";
import SearchBar from "../components/SearchBar";
import ShowGrid from "../components/ShowGrid";

export default function HomePage() {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getShows().then(setShows);
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (search) {
        searchShows(search).then((res) =>
          setShows(res.map((r) => r.show))
        );
      }
    }, 500); // 500ms delay

    return () => clearTimeout(delay);
  }, [search]);

  return (
    <>
      <SearchBar setSearch={setSearch} />
      <ShowGrid shows={shows} />
    </>
  );
}