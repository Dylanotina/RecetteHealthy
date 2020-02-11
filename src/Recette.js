import React from 'react';
import Nutriment from './Nutriment';
import './recette.modules.css';


let count = 0;

const value = ()=>{
    count = count+1;
    return count
}

const Recette = ({titre,calories,lipides,glucides,proteines,image,url,ingredients}) =>{
   return(
    <a href={url} className="lien">
        <div className="recipe">
            <h1>{titre}</h1>
            <p>Nombre de calories :{Math.floor(calories)}</p>
                <Nutriment
                    label={glucides.label}
                    quantite={Math.floor(glucides.quantity)}
                    unit={glucides.unit}/>
                <Nutriment
                    label={proteines.label}
                    quantite={Math.floor(proteines.quantity)}
                    unit={proteines.unit}/>
                <Nutriment
                    label={lipides.label}
                    quantite={Math.floor(lipides.quantity)}
                    unit={lipides.unit}/>
            <ol>{ingredients.map(ingredient=>(
                <li key={value()}>{ingredient.text}</li>
            ))}</ol>
            <img src={image} alt=" "></img>
        </div>
    </a>
   );
}
export default Recette;