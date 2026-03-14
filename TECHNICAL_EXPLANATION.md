# Technical Explanation Document

This document explains the core concepts and code patterns used in the Celebrare Photo Gallery project.

---

## 1. Custom Hook: `useFetchPhotos`
The `useFetchPhotos` hook abstracts the API logic. It handles the lifecycle of the fetch request and provides the component with clean state.

```jsx
const useFetchPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://picsum.photos/v2/list?limit=30');
        if (!response.ok) throw new Error('API Error');
        const data = await response.json();
        setPhotos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, []);

  return { photos, loading, error };
};
```
**Why?** It keeps the UI components separate from the data-fetching logic, making both parts easier to read and test.

---

## 2. State Management: `useReducer`
We use `useReducer` for favorites to handle the "toggle" logic in one centralized place.

```jsx
const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE': {
      const isFavorite = state.some(photo => photo.id === action.payload.id);
      let newState = isFavorite
        ? state.filter(photo => photo.id !== action.payload.id)
        : [...state, action.payload];
      
      localStorage.setItem('favorites', JSON.stringify(newState));
      return newState;
    }
    // ...
  }
};
```
**Why?** `useReducer` is better than `useState` for complex state transitions where the next state depends on the previous state and specific logic (like checking for duplicates).

---

## 3. Performance: `useMemo` and `useCallback`
These hooks prevent unnecessary computations and re-renders.

```jsx
// useCallback: Keeps the function reference the same across renders
const handleSearch = useCallback((e) => {
  setSearchTerm(e.target.value);
}, []);

// useMemo: Only recalculates the filtered list when photos or searchTerm change
const filteredPhotos = useMemo(() => {
  return photos.filter((photo) =>
    photo.author.toLowerCase().includes(searchTerm.toLowerCase())
  );
}, [photos, searchTerm]);
```
**Why?** Without these, React would recreate the search function and redo the filtering on **every** render, which can slow down the app as the list grows.

---

## 4. UI: Manual CSS Design
The clean look is achieved using a dedicated `App.css` file with standard CSS classes. This makes the code easier to follow for beginners compared to complex Tailwind-only utility strings.

```css
.photo-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
```
**Why?** Using custom CSS classes provides better readability and control over the design, making it look like a carefully hand-coded project.
