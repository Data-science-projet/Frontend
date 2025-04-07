import React, { useState } from 'react';
import './TranslationContainer.css';
import LanguageControls from './LanguageControls';
import TranslationBoxes from './TranslationBoxes';
import ModelInfo from './ModelInfo';
import TranslationStats from './TranslationStats';

function TranslationContainer() {
  const [sourceLanguage, setSourceLanguage] = useState('english');
  const [targetLanguage, setTargetLanguage] = useState('bafia');
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [translationStats, setTranslationStats] = useState({
    confidence: 98.2,
    processingTime: 0.3,
    wordCount: 0,
    sentenceCount: 0
  });
  
  const handleSwapLanguages = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };
  
  const handleTranslate = () => {
    // In a real implementation, this would call your Hugging Face model API
    console.log(`Translating from ${sourceLanguage} to ${targetLanguage}: "${sourceText}"`);
    
    // Simulate translation
    setTranslatedText(`[${targetLanguage.toUpperCase()} TRANSLATION OF: "${sourceText}"]`);
    
    // Update stats
    const words = sourceText.split(/\s+/).filter(word => word.length > 0).length;
    const sentences = sourceText.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;
    
    setTranslationStats({
      confidence: Math.floor(Math.random() * 10) + 90, // Random 90-99%
      processingTime: Math.random().toFixed(1),
      wordCount: words,
      sentenceCount: sentences
    });
  };
  
  return (
    <div className="container">
      <h1>Translate from English and French to Bafia, Fulfulde (Adamawa)</h1>
      
      <div className="translator-container">
        <LanguageControls 
          sourceLanguage={sourceLanguage}
          targetLanguage={targetLanguage}
          setSourceLanguage={setSourceLanguage}
          setTargetLanguage={setTargetLanguage}
          onSwap={handleSwapLanguages}
        />
        
        <TranslationBoxes 
          sourceText={sourceText}
          translatedText={translatedText}
          setSourceText={setSourceText}
          setTranslatedText={setTranslatedText}
        />
        
        <button className="translate-btn" onClick={handleTranslate}>Translate</button>
        
        <ModelInfo />
        
        <TranslationStats stats={translationStats} />
      </div>
    </div>
  );
}

export default TranslationContainer;