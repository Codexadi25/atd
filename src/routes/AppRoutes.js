import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "../layouts/UserLayout.js";
import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Services from "../pages/Services.js";
import Contact from "../pages/Contact.js";
import Pricing from "../pages/Pricing.js";
import FAQs from "../pages/FAQs.js";
import Error from "../pages/Error.js";
import ProductsPage from '../pages/ProductsPage.js';
import TestAnimation from '../pages/TestAnimation.js';
import Blog from '../blogs/pages/Blog.jsx';
import { sampleBlogs } from '../blogs/data/sampleBlogs';


function AppRoutes() {

    const [blogs, setBlogs] = useState(sampleBlogs);

    // Function to add a new blog to the list
    const handleNewBlog = (newBlog) => {
        setBlogs((prevBlogs) => [newBlog, ...prevBlogs]);
    };

   return (
      <Router>
          <Routes>
              <Route path="/" element={<UserLayout />}>
                  <Route index element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faqs" element={<FAQs />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/products" element={<ProductsPage/>} />
                  <Route path="/test-animation" element={<TestAnimation/>} />
                  {/* <Route path="/products" element={<Error/>} /> */}
                  <Route path="/blogs" element={<Blog blogs={blogs} />} />
               </Route>
               <Route path="*" element={<UserLayout />} > 
                  <Route path="*" element={<Error/>} />
               </Route>
          </Routes>
      </Router>
  );
}

export default AppRoutes