import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="main-layout">
      <header className="header">
        <h1>Astronomy Club Management System</h1>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <p>&copy; 2024 Astronomy Club</p>
      </footer>
    </div>
  );
}
