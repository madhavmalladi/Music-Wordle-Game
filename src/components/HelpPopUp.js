import React from 'react';
import './HelpPopUp.css';

function HelpPopUp({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Help - Categories Explained</h2>
        <ul className="help-list">
          <li>
            <strong>Genre:</strong> The artist's main genre.
          </li>
          <li>
            <strong>Birth Year:</strong> The year in which the artist was born. 
            <span className="highlight yellow"> Yellow</span> indicates within 7 years of the correct artist.
          </li>
          <li>
            <strong>Debut Year:</strong> The year in which the artist released their first studio album. 
            <span className="highlight yellow"> Yellow</span> indicates within 7 years of the correct artist.
          </li>
          <li>
            <strong>Monthly Streams:</strong> The artist's monthly streams (<strong>m</strong> for millions) according to Spotify. 
            <span className="highlight yellow"> Yellow</span> indicates within 10 million of the correct artist.
          </li>
          <li>
            <strong>Num Albums:</strong> The number of studio albums released by the artist until December 2024.
            <span className="highlight yellow"> Yellow</span> indicates within 3 albums of the correct artist.
          </li>
        </ul>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default HelpPopUp;
