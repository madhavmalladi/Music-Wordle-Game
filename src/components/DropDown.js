import React, { useState, useEffect } from "react";
import { answerBank } from "../Artist";

function DropDown({ onSelect, resetSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArtists, setFilteredArtists] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (event) => {
    const input = event.target.value;
    setSearchTerm(input);
    if (input.trim() === "") {
      setFilteredArtists([]);
      setShowDropdown(false);
    } else {
      const filtered = answerBank.filter((artist) =>
        artist.name.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredArtists(filtered);
      setShowDropdown(true);
    }
  };

  const handleSelect = (artist) => {
    setSearchTerm(artist.name);
    setShowDropdown(false);
    if (onSelect) {
      onSelect(artist);
    }
  };

  useEffect(() => {
    if (resetSearch) {
      setSearchTerm("");
    }
  }, [resetSearch]); 

  return (
    <div className="dropdown-container">
      <input
        type="text"
        placeholder="Type an Artist's Name..."
        value={searchTerm}
        onChange={handleInputChange}
        onFocus={() => setShowDropdown(true)}
        className="search-box"
      />

      {showDropdown && filteredArtists.length > 0 && (
        <ul className="dropdown-menu">
          {filteredArtists.map((artist, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => handleSelect(artist)}
            >
              {artist.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropDown;
