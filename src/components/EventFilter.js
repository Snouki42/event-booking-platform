import React from 'react';

const EventFilter = ({ onFilterChange }) => {
  return (
    <div className="event-filter">
      <input type="text" placeholder="Rechercher..." onChange={(e) => onFilterChange('search', e.target.value)} />
      <select onChange={(e) => onFilterChange('category', e.target.value)}>
        <option value="">Toutes catégories</option>
        <option value="concert">Concert</option>
        <option value="conference">Conférence</option>
        {/* Ajoutez d'autres catégories ici */}
      </select>
      <select onChange={(e) => onFilterChange('sort', e.target.value)}>
        <option value="">Trier par</option>
        <option value="price_asc">Prix croissant</option>
        <option value="price_desc">Prix décroissant</option>
      </select>
    </div>
  );
};

export default EventFilter;
