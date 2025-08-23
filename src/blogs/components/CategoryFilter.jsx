import React, { useState } from 'react';
import '../styles/CategoryFilter.css';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCategorySelect = (category) => {
    onCategoryChange(category);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="category-filter">
      <label className="filter-label">Filter by category:</label>
      
      <div className={`filter-dropdown ${isOpen ? 'open' : ''}`}>
        <button 
          className="filter-button"
          onClick={toggleDropdown}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span className="selected-category">{selectedCategory}</span>
          <svg 
            className={`dropdown-icon ${isOpen ? 'rotated' : ''}`}
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none"
          >
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {isOpen && (
          <ul className="filter-options" role="listbox">
            {categories.map((category) => (
              <li key={category} role="option">
                <button
                  className={`filter-option ${selectedCategory === category ? 'selected' : ''}`}
                  onClick={() => handleCategorySelect(category)}
                >
                  <span className="option-text">{category}</span>
                  {selectedCategory === category && (
                    <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      {/* Mobile-friendly button layout for smaller screens */}
      <div className="mobile-filter-chips">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-chip ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;