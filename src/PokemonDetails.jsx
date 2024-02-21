import React from "react";
import PropTypes from "prop-types";

const PokemonDetails = ({ name, picture, typeIcon, description }) => {
  return (
    <div className="pokemon-details">
      <h2>{name}</h2>
      <img src={picture} alt={name} />
      <p>
        <strong>Type:</strong> <img src={typeIcon} alt="Type Icon" />
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
    </div>
  );
};

PokemonDetails.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  typeIcon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PokemonDetails;
