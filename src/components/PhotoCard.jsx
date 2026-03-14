import { Heart } from 'lucide-react';

import '../App.css';

const PhotoCard = ({ photo, isFavorite, onToggleFavorite }) => (
  <div className="photo-card">
    <img
      src={`https://picsum.photos/id/${photo.id}/400/400`}
      alt={`Photo by ${photo.author}`}
      className="photo-img"
      loading="lazy"
    />
    
    <div className="card-info">
      <p className="author-name">{photo.author}</p>
      <button
        onClick={() => onToggleFavorite(photo)}
        className="fav-button"
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <Heart 
          className={`h-6 w-6 ${isFavorite ? 'favorite-active fill-current' : 'favorite-inactive'}`} 
        />
      </button>
    </div>
  </div>
);

export default PhotoCard;
