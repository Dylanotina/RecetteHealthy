import React from "react";
import Nutriment from "./Nutriment";
import "./recette.modules.css";

const Recette = ({
  titre,
  calories,
  lipides,
  glucides,
  proteines,
  image,
  url,
  ingredients,
}) => {
  return (
    <div className="recipe">
      <a href={url}>
        <h1>{titre}</h1>
      </a>
      <p>Nombre de calories :{Math.floor(calories)}</p>
      <Nutriment
        label={glucides.label}
        quantite={Math.floor(glucides.quantity)}
        unit={glucides.unit}
      />
      <Nutriment
        label={proteines.label}
        quantite={Math.floor(proteines.quantity)}
        unit={proteines.unit}
      />
      <Nutriment
        label={lipides.label}
        quantite={Math.floor(lipides.quantity)}
        unit={lipides.unit}
      />

      <img src={image} alt=" "></img>
    </div>
  );
};
export default Recette;
