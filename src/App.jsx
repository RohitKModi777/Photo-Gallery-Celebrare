import { useState, useReducer, useMemo, useCallback, useEffect } from 'react';
import useFetchPhotos from './hooks/useFetchPhotos';
import favoritesReducer from './reducers/favoritesReducer';

// Sub-components
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import SearchBar from './components/SearchBar';
import PhotoGrid from './components/PhotoGrid';

import './App.css';

function App() {
  const { photos, loading, error } = useFetchPhotos();
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, dispatch] = useReducer(favoritesReducer, []);

  // Hydrate favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      dispatch({ type: 'SET_INITIAL', payload: JSON.parse(savedFavorites) });
    }
  }, []);

  // Filter handler (useCallback as required)
  const handleSearch = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  // Filtered list calculation (useMemo as required)
  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [photos, searchTerm]);

  // Favorite toggle handler
  const toggleFavorite = (photo) => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: photo });
  };

  // Render Loading state
  if (loading) return <Loader />;

  // Render Error state
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="app-container">
      <header>
        <h1 className="title">Photo Gallery</h1>
        <p className="subtitle">
          Browse through our collection of beautiful photos Which is fetched  from piscum API.
        </p>
        <SearchBar value={searchTerm} onChange={handleSearch} />
      </header>

      <main>
        <PhotoGrid 
          photos={filteredPhotos} 
          favorites={favorites} 
          onToggleFavorite={toggleFavorite} 
        />
      </main>
      
      <footer style={{ marginTop: '60px', textAlign: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '20px', color: '#718096' }}>
        <p>© 2026 Celebrare Assignment - Simple & Clean Design</p>
      </footer>
    </div>
  );
}

export default App;
