import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Editor } from './Editor';
import { SocialProofNotification } from './components/SocialProofNotification';

export default function App() {
  return (
    <BrowserRouter>
      <SocialProofNotification />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<Editor />} />
      </Routes>
    </BrowserRouter>
  );
}

