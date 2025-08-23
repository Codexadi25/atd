import React, { useState, useEffect } from 'react';
import BlogList from '../components/BlogList';
import BlogPost from '../components/BlogPost';
import BlogNavigation from '../components/BlogNavigation';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import '../styles/Blog.css';
import BlogLogo from '../Blogs.png'

const Blog = ({ blogs }) => {
  const [currentBlog, setCurrentBlog] = useState(null);
    // The initial state for filteredBlogs should now come from the prop
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Get categories from the blogs prop
  const categories = ['All', ...new Set(blogs.map(blog => blog.category))];

  useEffect(() => {
    let filtered = blogs; // <-- Start with the blogs prop

    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }

    setFilteredBlogs(filtered);
  }, [searchTerm, selectedCategory, blogs]);

  const handleBlogSelect = (blog) => {
    setCurrentBlog(blog);
    const index = filteredBlogs.findIndex(b => b.id === blog.id);
    setCurrentIndex(index);
  };

  const handleNavigation = (direction) => {
    if (!currentBlog) return;

    let newIndex;
    if (direction === 'next') {
      newIndex = currentIndex < filteredBlogs.length - 1 ? currentIndex + 1 : 0;
    } else {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredBlogs.length - 1;
    }

    setCurrentIndex(newIndex);
    setCurrentBlog(filteredBlogs[newIndex]);
  };

  const handleBackToList = () => {
    setCurrentBlog(null);
  };

  if (currentBlog) {
    return (
      <div className="blog-container">
        <BlogNavigation
          currentBlog={currentBlog}
          onNavigate={handleNavigation}
          onBackToList={handleBackToList}
          hasNext={currentIndex < filteredBlogs.length - 1}
          hasPrev={currentIndex > 0}
          currentIndex={currentIndex}
          totalBlogs={filteredBlogs.length}
        />
        <BlogPost blog={currentBlog} />
        <BlogNavigation
          currentBlog={currentBlog}
          onNavigate={handleNavigation}
          onBackToList={handleBackToList}
          hasNext={currentIndex < filteredBlogs.length - 1}
          hasPrev={currentIndex > 0}
          currentIndex={currentIndex}
          totalBlogs={filteredBlogs.length}
          position="bottom"
        />
      </div>
    );
  }

  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Tech <img src={BlogLogo} className='pageLogo' alt='ATDblogs-Logo'/>logs</h1>
        <p>Insights on Development, AI, DevOps., Tools & Technologies  | By Aditya Sahu & Team Aditya Tech. & Devoops. </p>
      </div>
      
      <div className="blog-filters">
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <BlogList 
        blogs={filteredBlogs}
        onBlogSelect={handleBlogSelect}
      />
    </div>
  );
};

export default Blog;