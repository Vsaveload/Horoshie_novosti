import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NewsPage from './NewsPage';

export default function App() {
  return (
    <div>

      <Routes>
        <Route path="/news" element={<NewsPage />} />
      </Routes>

    </div>
  );
}
