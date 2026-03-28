import "./SearchBar.scss";

export default function SearchBar({ setSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="🔍 Search TV shows..."
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
    </div>
  );
}