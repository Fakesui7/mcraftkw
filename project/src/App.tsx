import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { BoatModelsPage } from './pages/BoatModelsPage';
import { BoatDetailsPage } from './components/boats/details/BoatDetailsPage';
import { ContactPage } from './pages/ContactPage';
import { ScrollToTop } from './components/utils/ScrollToTop';

export const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/boat-models" element={<BoatModelsPage />} />
          <Route path="/boat-details/:id" element={<BoatDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};