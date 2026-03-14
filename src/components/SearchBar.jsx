import { Search } from 'lucide-react';

import '../App.css';

const SearchBar = ({ value, onChange }) => (
  <div className="search-container">
    <Search className="search-icon h-5 w-5" />
    <input
      type="text"
      className="search-input"
      placeholder="Search by author name..."
      value={value}
      onChange={onChange}
    />
  </div>
);

export default SearchBar;
