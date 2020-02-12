import React, { useEffect, useState } from "react";
import Recette from "./Recette";
import "./App.css";

const App = () => {
  const KEY_ID = process.env.REACT_APP_KEY_ID;
  const APP_ID = process.env.REACT_APP_APP_ID;

  const [recettes, setRecettes] = useState([]);
  const [query, setQuery] = useState("beef");
  const [search, setSearch] = useState("");
  const [diet, setDiet] = useState("balanced");
  const request = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${KEY_ID}&diet=${diet}`;

  const updatesearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const updateQuery = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const updateDiet = value => {
    if (value != null) {
      setDiet(value);
      console.log(request);
    }
  };

  useEffect(
    function() {
      getData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [query]
  );
  const getData = async () => {
    const response = await fetch(request);
    const data = await response.json();
    console.log(data.hits);
    setRecettes(data.hits);
  };

  return (
    <div className="App">
      <div className="Title">
        <h1>Recettes Healhty</h1>
      </div>
      <form className="search-form" onSubmit={updateQuery}>
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updatesearch}
        />
        <button className="search-button" type="submit">
          Rechercher
        </button>
        <label htmlFor={"balenced"}>Balenced diet</label>
        <input
          type={"radio"}
          name="dietType"
          value="balanced"
          id={"balenced"}
          onClick={() => updateDiet("balenced")}
        ></input>
        <label htmlFor="high_protein">High protein diet</label>
        <input
          type={"radio"}
          name="dietType"
          value={"high-protein"}
          id="high_protein"
          onClick={() => updateDiet("high-protein")}
        ></input>
        <label htmlFor="low-fat">Low Fat diet</label>
        <input
          type={"radio"}
          name="dietType"
          value={"low-fat"}
          id="low-fat"
          onClick={() => updateDiet("low-fat")}
        ></input>
      </form>
      <div className="recettes">
        {recettes.map(recette => (
          <Recette
            key={recette.recipe.label}
            titre={recette.recipe.label}
            calories={recette.recipe.calories}
            glucides={recette.recipe.totalNutrients["CHOCDF"]}
            proteines={recette.recipe.totalNutrients["PROCNT"]}
            lipides={recette.recipe.totalNutrients["FAT"]}
            image={recette.recipe.image}
            url={recette.recipe.url}
            ingredients={recette.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
