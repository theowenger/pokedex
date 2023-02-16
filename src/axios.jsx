import axios from "axios";

export const fetchData = async (limit = 151) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
  console.log(response.data.results)
  return response.data.results;
}

export const fetchOnePokemon = async (id) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  return response.data;
}
