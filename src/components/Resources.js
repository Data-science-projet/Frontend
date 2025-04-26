// src/components/Resources.js
import React, { useState } from 'react';
import './Resources.css';
import Header from './Header';
import Footer from './Footer';

function Resources() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Resource categories
  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'dictionaries', name: 'Dictionaries' },
    { id: 'grammar', name: 'Grammar Guides' },
    { id: 'audio', name: 'Audio Lessons' },
    { id: 'community', name: 'Community Resources' }
  ];

  // Resource items with category tags
  const resources = [
    {
      id: 1,
      title: 'Bulu-French Dictionary',
      description: 'Comprehensive dictionary covering over 5,000 words in Bulu with French translations.',
      category: 'dictionaries',
      imageUrl: '/images/bulu-dictionary.jpg',
      link: '#',
      tags: ['Bulu', 'Dictionary', 'French']
    },
    {
      id: 2,
      title: 'Practical Ewondo Grammar',
      description: 'A complete guide to Ewondo grammar with examples and exercises for learners.',
      category: 'grammar',
      imageUrl: '/images/ewondo-grammar.jpg',
      link: '#',
      tags: ['Ewondo', 'Grammar', 'Learning']
    },
    {
      id: 3,
      title: 'Duala Language Audio Course',
      description: 'Learn Duala through 30 audio lessons covering everyday conversations.',
      category: 'audio',
      imageUrl: '/images/duala-audio.jpg',
      link: '#',
      tags: ['Duala', 'Audio', 'Beginner']
    },
    {
      id: 4,
      title: 'Basaa Community Forum',
      description: 'Join the online community of Basaa speakers and learners to practice and share resources.',
      category: 'community',
      imageUrl: '/images/basaa-community.jpg',
      link: '#',
      tags: ['Basaa', 'Community', 'Practice']
    },
    {
      id: 5,
      title: 'Fulfulde Phrase Book',
      description: 'Essential phrases in Fulfulde for travelers and beginners with audio pronunciation.',
      category: 'dictionaries',
      imageUrl: '/images/fulfulde-phrasebook.jpg',
      link: '#',
      tags: ['Fulfulde', 'Phrases', 'Travel']
    },
    {
      id: 6,
      title: 'Bamun Script Learning Guide',
      description: 'Learn to read and write in the traditional Bamun script with step-by-step instructions.',
      category: 'grammar',
      imageUrl: '/images/bamun-script.jpg',
      link: '#',
      tags: ['Bamun', 'Writing', 'Script']
    },
    {
      id: 7,
      title: 'Kom Language Podcast',
      description: 'Weekly podcast featuring conversations in Kom with translations and cultural insights.',
      category: 'audio',
      imageUrl: '/images/kom-podcast.jpg',
      link: '#',
      tags: ['Kom', 'Podcast', 'Culture']
    },
    {
      id: 8,
      title: 'Cameroonian Languages Alliance',
      description: 'Organization dedicated to preserving and promoting indigenous Cameroonian languages.',
      category: 'community',
      imageUrl: '/images/languages-alliance.jpg',
      link: '#',
      tags: ['Community', 'Preservation', 'Multiple Languages']
    },
    {
      id: 9,
      title: 'Fang-English Illustrated Dictionary',
      description: 'Visual dictionary with 2,000+ Fang words illustrated with images for easier learning.',
      category: 'dictionaries',
      imageUrl: '/images/fang-dictionary.jpg',
      link: '#',
      tags: ['Fang', 'Visual', 'English']
    }
  ];

  // Filter resources based on active category
  const filteredResources = activeCategory === 'all' 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);

  return (
    <div className="resources-page">
        <Header />
      {/* Hero Section */}
      <section className="resources-hero">
        <h1>Language Resources</h1>
        <p>Explore our collection of resources to help you learn and practice Cameroonian languages</p>
      </section>

      {/* Category Filter */}
      <div className="category-filter">
        <div className="container">
          <h2>Browse by Category</h2>
          <div className="category-buttons">
            {categories.map(category => (
              <button 
                key={category.id}
                className={activeCategory === category.id ? 'active' : ''}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      <section className="resources-grid">
        <div className="container">
          <h2>{categories.find(cat => cat.id === activeCategory).name}</h2>
          
          {filteredResources.length === 0 ? (
            <p className="no-resources">No resources found in this category.</p>
          ) : (
            <div className="resources-container">
              {filteredResources.map(resource => (
                <div className="resource-card" key={resource.id}>
                  <div className="resource-image">
                    {/* Using placeholder for demo */}
                    <img src={`/api/placeholder/400/250`} alt={resource.title} />
                  </div>
                  <div className="resource-content">
                    <h3>{resource.title}</h3>
                    <p>{resource.description}</p>
                    <div className="resource-tags">
                      {resource.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>
                    <a href={resource.link} className="resource-button">Access Resource</a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="resources-cta">
        <div className="container">
          <h2>Can't Find What You're Looking For?</h2>
          <p>We're continuously expanding our language resources. If you have suggestions or would like to contribute resources for Cameroonian languages, please get in touch with us.</p>
          <div className="cta-buttons">
            <a href="/contact" className="cta-button primary">Contact Us</a>
            <a href="#" className="cta-button secondary">Submit a Resource</a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Resources;