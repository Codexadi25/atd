import React from 'react';
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import { Outlet } from "react-router-dom"; 
import ChatComponent from '../components/ChatWidget.js';

function UserLayout({children}) {
  return (
    <div>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>{children}
        <Outlet />
      </main>
      <ChatComponent/>
      <Footer />
    </div>
  )
}

export default UserLayout