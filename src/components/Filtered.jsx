import React, { useState } from "react";

function Filtered({ onTitleFilter }) {
  const [titleFilter, setTitleFilter] = useState("");

  const handleTitleChange = (e) => {
    const query = e.target.value.toLowerCase();
    setTitleFilter(query);
    onTitleFilter(query);
  };

  return (
    <div className="dropdown-container">
    <label className="dropdown-label"htmlFor="title">Filter by Theme: </label>
    <select className="dropdown-select"id="title" onChange={handleTitleChange} >
      <option value="">All Titles</option>
      <option value="Travel">Travel</option>
      <option value="Art">Art</option>
      <option value="Lifestyle">Lifestyle</option>
      <option value="Technology">Technology</option>
      
    </select>
  </div>
  );
}


export default Filtered;