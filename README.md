# Photo Gallery Web App

**Author:** [Your Name]  
**Submission Date:** March 15, 2026

A high-performance, responsive photo gallery built with **React**, **Vite**, and **Tailwind CSS**.

## 🚀 Key Features

This project was built to demonstrate core React concepts and modern frontend development practices:

1.  **Project Setup**: Initialized with React, Vite, and Tailwind CSS for optimized builds.
2.  **API Integration**: Fetches 30 photos dynamically from the [Picsum Photos API](https://picsum.photos/v2/list?limit=30).
3.  **Responsive Design**: A clean, "manual" CSS layout that is mobile-first:
    -   **Mobile**: 1 column
    -   **Tablet**: 2 columns
    -   **Desktop**: 4 columns
4.  **Real-time Search Filter**: Instant filtering by author name with `useMemo` for high performance.
5.  **State Management**: `useReducer` handles the favorite photo logic and LocalStorage synchronization.
6.  **Custom Hooks**: Business logic is encapsulated in a reusable `useFetchPhotos` hook.
7.  **UX Enhancements**: Includes a loading spinner and error handling for better user experience.

## 🛠️ Technical Implementation

### Performance Optimization
- **`useMemo`**: Used to compute the filtered photo list, preventing expensive re-calculations on unrelated re-renders.
- **`useCallback`**: Used for the search filter handler to maintain stable function references.

### State Management
- **`useReducer`**: Chosen over `useState` for favorites to handle complex state transitions (toggle logic) in a centralized and predictable way.

### Custom Hook (`useFetchPhotos`)
- Encapsulates the fetching logic and returns `{ photos, loading, error }`.
- Robust error handling and loading states are integrated into the UI.

## 📸 Screenshots

### Desktop View
![Full Photo Gallery Grid](/C:/Users/modiu/.gemini/antigravity/brain/ee1b6362-c4cb-446d-9c5f-e00f60a6f510/full_gallery_1773511954573.png)

### Search & Favorites
![Search and Favorites](/C:/Users/modiu/.gemini/antigravity/brain/ee1b6362-c4cb-446d-9c5f-e00f60a6f510/bottom_of_gallery_1773512094111.png)

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

