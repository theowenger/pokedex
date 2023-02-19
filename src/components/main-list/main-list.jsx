import { fetchData } from "../../axios";
import { useState, useEffect } from "react";
import "../main-list/main-list.css";
import { Link } from "react-router-dom";

function MainList() {
  const [listOfPokemon, setListOfPokemon] = useState([]);

  useEffect(() => {
    fetchData()
      .then((listOfPokemon) => {
        setListOfPokemon(listOfPokemon);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div>
        <ul id="pokemon-list">
          {listOfPokemon.map((pokemon, index) => (
            <Link to={"/pokemon/" + (index + 1)} key={pokemon.name}>
              <li key={pokemon.name} className="list-of-pokemon">
                <span>{index + 1}</span>
                <img
                className="pokemon-sprite"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    index + 1
                  }.png`}
                  alt={pokemon.name}
                />
                <span>{pokemon.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MainList;
