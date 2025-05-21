// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import SearchBox from './componentes/SearchBox';
import FormPost from './componentes/Form/FormPost';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>🔍 Buscar</Link>
          <Link to="/form">📝 Formulário</Link>
        </nav>

        <Routes>
          <Route path="/" element={<SearchBox />} />
          <Route path="/form" element={<FormPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
