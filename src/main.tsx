import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './pages/index';
import GlobalStyles from './styles/global';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Index />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
