import PhotoCard from './PhotoCard';

const PhotoGrid = ({ photos, favorites, onToggleFavorite }) => {
  if (photos.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-xl text-gray-500 dark:text-gray-400">No photos found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          isFavorite={favorites.some((fav) => fav.id === photo.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
};

export default PhotoGrid;
