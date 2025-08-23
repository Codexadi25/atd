import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../styles/BlogPost.css';

const BlogPost = ({ blog }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

   const CodeBlock = ({ node, inline, className, children, ...props }) => {
      const [copyText, setCopyText] = useState('Copy');
      const match = /language-(\w+)/.exec(className || '');
      const codeString = String(children).replace(/\n$/, '');

      const handleCopy = () => {
         navigator.clipboard.writeText(codeString).then(() => {
           setCopyText('Copied!');
           setTimeout(() => setCopyText('Copy'), 2000); // Reset after 2 seconds
         });
      };
   return !inline && match ? (
      <div className="code-block-wrapper">
        <button className="copy-button" onClick={handleCopy}>
          {copyText}
        </button>
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={match[1]}
          PreTag="div"
          className="code-block"
          {...props}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
      ) : (
         <code className={className} {...props}>
           {children}
         </code>
      );
   };

  const components = {
   code: CodeBlock,
    h1: ({ children }) => <h1 className="blog-h1">{children}</h1>,
    h2: ({ children }) => <h2 className="blog-h2">{children}</h2>,
    h3: ({ children }) => <h3 className="blog-h3">{children}</h3>,
    p: ({ children }) => <p className="blog-p">{children}</p>,
    ul: ({ children }) => <ul className="blog-ul">{children}</ul>,
    ol: ({ children }) => <ol className="blog-ol">{children}</ol>,
    li: ({ children }) => <li className="blog-li">{children}</li>,
    blockquote: ({ children }) => <blockquote className="blog-blockquote">{children}</blockquote>,
    a: ({ children, href }) => <a className="blog-link" href={href} target="_blank" rel="noopener noreferrer">{children}</a>,
  };

  return (
    <article className="blog-post">
      <div className="blog-post-header">
        <div className="blog-post-meta">
          <span className="blog-post-category">{blog.category}</span>
          <span className="blog-post-read-time">{blog.readTime}</span>
        </div>
        
        <h1 className="blog-post-title">{blog.title}</h1>
        
        <div className="blog-post-info">
          <div className="author-info">
            <div className="author-avatar">
              <span>{blog.author.charAt(0)}</span>
            </div>
            <div className="author-details">
              <span className="author-name">{blog.author}</span>
              <span className="publish-date">{formatDate(blog.date)}</span>
            </div>
          </div>
          
          <div className="blog-post-tags">
            {blog.tags.map((tag, index) => (
              <span key={index} className="blog-post-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="blog-post-content">
        <ReactMarkdown components={components}>
          {blog.content}
        </ReactMarkdown>
      </div>

      <div className="blog-post-footer">
        <div className="share-section">
          <h4>Share this article</h4>
          <div className="share-buttons">
            <button className="share-btn twitter" onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              Twitter
            </button>
            <button className="share-btn linkedin" onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, '_blank')}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </button>
            <button className="share-btn copy" onClick={() => navigator.clipboard.writeText(window.location.href)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;