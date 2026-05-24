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
import RevenueOSPage from '../pages/products/RevenueOSPage.js';
import SupportHubPage from '../pages/products/SupportHubPage.js';
import NexLogLogistics from '../pages/products/NexLogLogistics.jsx';
import Blog from '../blogs/pages/Blog.jsx';
import { sampleBlogs } from '../blogs/data/sampleBlogs';
import TermsAndConditions from '../pages/TermsAndConditions.js'


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
                  <Route path="/products/revenueos" element={<RevenueOSPage/>} />
                  <Route path="/products/supporthub" element={<SupportHubPage/>} />
                  <Route path="/products/nexlog" element={<NexLogLogistics/>} />
                  <Route path="/blogs" element={<Blog blogs={blogs} />} />
                  <Route path="/terms-conditions" element={<TermsAndConditions/>} />
               </Route>
               <Route path="*" element={<UserLayout />} > 
                  <Route path="*" element={<Error/>} />
               </Route>
          </Routes>
      </Router>
  );
}

export default AppRoutes