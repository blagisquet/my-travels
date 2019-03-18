import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
    <img src={photo} alt={destination} />
    <figcaption>
      <blockquote>{destination} en {country} est à {distance} kms</blockquote>
      <cite>{destination}</cite>
    </figcaption>
  </figure>
);

export default Travel;