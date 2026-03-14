# Photo Gallery Web App
A clean, responsive, and high-performance photo browsing application built with **React**, **Vite**, and **Tailwind CSS**. It features real-time search, favorite persistence using `useReducer` and `localStorage`, and optimized performance via `useMemo` and `useCallback`

## 🚀 Features

The application implements all 7 core requirements:

1.  **Project Setup**: Modern setup using React + Vite + Tailwind CSS for a fast and scalable foundation.
2.  **API Integration**: Fetches 30 photos on load from the [Picsum Photos API](https://picsum.photos/v2/list?limit=30).
3.  **Responsive Grid**: A fluid layout that adapts to all screen sizes:
    -   **Desktop**: 4 columns
    -   **Tablet**: 2 columns
    -   **Mobile**: 1 column
4.  **Real-time Search Filter**: Instant filtering by author name without page reloads or redundant API calls.
5.  **Favorites with `useReducer`**: Robust state management for adding/removing favorites.
6.  **Data Persistence**: Uses `localStorage` to ensure favorite photos persist even after a page refresh.
7.  **Custom Hooks**: logic is cleanly separated using a custom `useFetchPhotos` hook.

OPTIMIZATION (useMemo & useCallback)
---------------------------------------
- useMemo: Stops the app from re-calculating the search filter every single time something changes. It only runs if you type something or the photos load.
- useCallback: Keeps the 'handleSearch' function stable so the search bar doesn't flicker or re-render unnecessarily.
- 
## 🛠️ Technical Implementation

### Performance Optimization
- **`useMemo`**: Used to compute the filtered photo list, preventing expensive re-calculations on unrelated re-renders.
- **`useCallback`**: Used for the search filter handler to maintain stable function references.

### State Management
- **`useReducer`**: Chosen over `useState` for favorites to handle complex state transitions (toggle logic) in a centralized and predictable way.

### Custom Hook (`useFetchPhotos`)
- Encapsulates the fetching logic and returns `{ photos, loading, error }`.
- Robust error handling and loading states are integrated into the UI.

## 📦 Getting Started

1. **Clone the repository**
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash
   npm run dev
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```

