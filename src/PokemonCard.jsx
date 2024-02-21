import React from "react";
import PropTypes from "prop-types";

export default function PokemonCard({ name, icon, typeIcon, onClickHandler }) {
  return (
    <div className="pokemon-card" onClick={onClickHandler}>
      <div className="image-container">
        <img src={icon} alt={name} className="pokemon-image" />
      </div>
      <div className="pokemon-info">
        <h2 className="pokemon-name">{name}</h2>
        <img src={typeIcon} alt="Type" className="type-icon" />
      </div>
    </div>
  );
}
PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  typeIcon: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
};
