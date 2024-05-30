import React from 'react';
import './App.css';

const HeaderFooter = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">logo</div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <div className="social">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </header>

      <main className="main-content">
        <div className="text-content">
          <h1>Header</h1>
          <h2>Footer</h2>
          <p>
            Duis ultricies lacus sed turpis tincidunt id aliquet risus. 
            Bibendum est ultricies integer quis auctor.
          </p>
          <div className="color-dots">
            <span className="dot yellow"></span>
            <span className="dot red"></span>
            <span className="dot blue"></span>
          </div>
        </div>
        <div className="image-content">
          <img src="https://tse1.mm.bing.net/th?id=OIP.k3OnCMlJuCDK7soni1AZxQHaLF&pid=Api&P=0&h=220"/>
        </div>
      </main>

      <footer className="footer">
        <div className="block">
          <h3>Block header</h3>
          <p>Block content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc justo sagittis suscipit ultrices.</p>
        </div>
        <div className="block">
          <h3>Block header</h3>
          <p>Block content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc justo sagittis suscipit ultrices.</p>
        </div>
        <div className="block">
          <h3>Block header</h3>
          <p>Block content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nunc justo sagittis suscipit ultrices.</p>
        </div>
      </footer>
    </div>
  );
}

export default HeaderFooter;
