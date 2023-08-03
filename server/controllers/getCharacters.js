import axios from "axios";
const URL = "https://rickandmortyapi.com/api/character/";

export const getCharacters = async (req, res) => {
    const {data} = await axios(URL);
  try {
    const character = {
      id: data.id,
      name: data.name,
      gender: data.gender,
      species: data.species,
      origin: data.origin?.name,
      image: data.image,
      status: data.status,
    };

    character
      ? res.status(200).json(data)
      : res.status(404).send("not found");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}