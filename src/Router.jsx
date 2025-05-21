// componentes/Router.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchBox from './SearchBox';
import FormPost from './componentes/Form/FormPost';

const Router = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Buscar</Link> | <Link to="/postar">Criar Post</Link>
      </nav>

      <Routes>
        <Route path="/" element={<SearchBox />} />
        <Route path="/postar" element={<FormPost />} />
      </Routes>
    </Router>
  );
};

export default Router;
