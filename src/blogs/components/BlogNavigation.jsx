import React, { useEffect } from 'react';
import '../styles/BlogNavigation.css';

function BlogNavigation({ 
  currentBlog, 
  onNavigate, 
  onBackToList, 
  hasNext, 
  hasPrev, 
  currentIndex, 
  totalBlogs,
  position = 'top'
}) {

   useEffect(() => {
  const handleKeyPress = (e) => {
    if (e.key === 'ArrowLeft' && hasPrev) {
      onNavigate('prev');
    } else if (e.key === 'ArrowRight' && hasNext) {
      onNavigate('next');
    } else if (e.key === 'Escape') {
      onBackToList();
    }
  };

  document.addEventListener('keydown', handleKeyPress);
  return () => document.removeEventListener('keydown', handleKeyPress);
}, [hasNext, hasPrev, onNavigate, onBackToList]);

  return (
    <nav className={`blog-navigation ${position}`}>
      <div className="nav-container">
        {/* Back to Blog List Button */}
        <button 
          className="nav-btn back-to-list"
          onClick={onBackToList}
          title="Back to blog list"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>All Blogs</span>
        </button>

        {/* Navigation Info */}
        <div className="nav-info">
          <span className="nav-counter">
            {currentIndex + 1} of {totalBlogs}
          </span>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${((currentIndex + 1) / totalBlogs) * 100}%` }}
            />
          </div>
        </div>

        {/* Previous/Next Navigation */}
        <div className="nav-controls">
          <button 
            className={`nav-btn prev ${!hasPrev ? 'disabled' : ''}`}
            onClick={() => onNavigate('prev')}
            disabled={!hasPrev}
            title="Previous article"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="nav-text">Previous</span>
          </button>

          <button 
            className={`nav-btn next ${!hasNext ? 'disabled' : ''}`}
            onClick={() => onNavigate('next')}
            disabled={!hasNext}
            title="Next article"
          >
            <span className="nav-text">Next</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Keyboard shortcuts hint (only show on top) */}
      {position === 'top' && (
        <div className="keyboard-hints">
          <span className="hint">
            <kbd>←</kbd> Previous
          </span>
          <span className="hint">
            <kbd>→</kbd> Next
          </span>
          <span className="hint">
            <kbd>Esc</kbd> Back to list
          </span>
        </div>
      )}
    </nav>
  );
};

export default BlogNavigation;