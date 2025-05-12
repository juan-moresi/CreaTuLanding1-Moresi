import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <div className="greeting">
        <h2>{greeting}</h2>
      </div>
      <div className="items-placeholder">
        <h3>Catálogo de Sneakers</h3>
        <p>Aquí se mostrarán los productos próximamente</p>
      </div>
    </div>
  );
};

export default ItemListContainer;