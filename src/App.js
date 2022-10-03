import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetScreenshot from './pages/3DViewer/index.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetScreenshot />} />
      </Routes>
    </Router>
  );
}

export default App;