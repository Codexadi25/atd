import React, { useState, useRef } from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleClear = () => {
    onSearchChange('');
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleClear();
      inputRef.current?.blur();
    }
  };

  return (
    <div className={`search-container ${isFocused ? 'focused' : ''}`}>
      <div className="search-wrapper">
        <div className="search-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
            <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <input
          ref={inputRef}
          type="text"
          placeholder="Search articles, tags, or topics..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          className="search-input"
        />
        
        {searchTerm && (
          <button 
            className="clear-button"
            onClick={handleClear}
            title="Clear search"
            type="button"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
      
      {isFocused && (
        <div className="search-hints">
          <span className="hint">
            <kbd>Enter</kbd> to search
          </span>
          <span className="hint">
            <kbd>Esc</kbd> to clear
          </span>
        </div>
      )}
    </div>
  );
};

export default SearchBar;