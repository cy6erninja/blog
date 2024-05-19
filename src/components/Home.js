// src/components/Home.js
import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <header className="header">
                <h1>Welcome to My Blog</h1>
            </header>
            <main className="main-content">
                <p>This is a simple React blog using GitHub Pages.</p>
            </main>
            <footer className="footer">
                <p>&copy; 2024 My Blog. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Home;