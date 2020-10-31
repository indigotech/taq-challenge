import React from "react";

export const CardCharacter = ({ name, status, image }) => {
  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <p>{name}</p>
        <p>{status}</p>
      </div>
    </div>
  );
};
