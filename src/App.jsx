import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="background-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      <div className="app-container">
        <main className="glass-card">
          <h1 className="title">ViteReact NextGen</h1>
          <p className="subtitle">
            Experience lightning-fast development with a beautifully crafted, 
            glassmorphic interface. Built with React and Vite.
          </p>
          
          <div className="button-group">
            <button className="btn btn-primary" onClick={() => setCount(c => c + 1)}>
              Interactive Count: {count}
            </button>
            <a href="https://vitejs.dev" target="_blank" rel="noreferrer" className="btn btn-secondary">
              Explore Vite
            </a>
          </div>

          <div className="features">
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <h3 className="feature-title">Instant Server Start</h3>
              <p className="feature-desc">On demand file serving over native ESM, no bundling required!</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✨</span>
              <h3 className="feature-title">Rich Aesthetics</h3>
              <p className="feature-desc">Gorgeous glassmorphism, vibrant gradients, and smooth micro-animations.</p>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🛠️</span>
              <h3 className="feature-title">Optimized Build</h3>
              <p className="feature-desc">Pre-configured Rollup build with multi-page and library mode support.</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
