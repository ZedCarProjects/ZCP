import React from 'react';
import Navbar from '../navigation/Navbar.jsx';
import Footer from '../navigation/Footer.jsx';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-zcp-black to-black">
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
