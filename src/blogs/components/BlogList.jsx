import React from 'react';
import '../styles/BlogList.css';

const BlogList = ({ blogs, onBlogSelect }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="blog-list">
      {blogs.length === 0 ? (
        <div className="no-blogs">
          <h3>No blogs found</h3>
          <p>Try adjusting your search or filter criteria.</p>
        </div>
      ) : (
        <div className="blog-grid">
          {blogs.map((blog) => (
            <article 
              key={blog.id} 
              className="blog-card"
              onClick={() => onBlogSelect(blog)}
            >
              <div className="blog-card-header">
                <div className="blog-meta">
                  <span className="blog-category">{blog.category}</span>
                  <span className="blog-read-time">{blog.readTime}</span>
                </div>
              </div>
              
              <div className="blog-card-content">
                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-excerpt">{blog.excerpt}</p>
              </div>
              
              <div className="blog-card-footer">
                <div className="blog-author-info">
                  <span className="blog-author">By {blog.author}</span>
                  <span className="blog-date">{formatDate(blog.date)}</span>
                </div>
                
                <div className="blog-tags">
                  {(blog.tags || []).slice(0, 3).map((tag, index) => (
                    <span key={index} className="blog-tag">{tag}</span>
                  ))}
                  {blog.tags && blog.tags.length > 3 && (
                    <span className="blog-tag-more">+{blog.tags.length - 3}</span>
                  )}
                </div>
              </div>
              
              <div className="blog-card-overlay">
                <button className="read-more-btn">
                  Read Article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;