import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TranslationContainer from './components/TranslationContainer';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <TranslationContainer />
        <FeatureGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
