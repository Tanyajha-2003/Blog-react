import React, { useState } from "react";

function Search({ onSearch}) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search by theme"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;

