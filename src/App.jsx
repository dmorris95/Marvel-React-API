import CharacterList from "./components/CharacterList"
import CharacterDetail from "./components/CharacterDetail"
import { useEffect, useState } from "react"
import axios from "axios";
import "./components/character.css";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
      fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
        //Set your own timetamp, apikey and hash
        const ts = '1';
        const apikey = '';
        const hash = '';

        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=25`);
        setCharacters(response.data.data.results);
    } catch (error) {
        console.log('Error fetching products', error);
    }
  };
  
  const handleCharacterSelect = (character) => {
      setSelectedCharacter(character);
  }


  return (
    <div>
      <h1>The Marvel React API</h1>
      <CharacterList 
        characters={characters}
        onCharacterSelect={handleCharacterSelect}
         />
      {selectedCharacter && (
        <CharacterDetail 
        selectedCharacter={selectedCharacter}
        />
      )}
      
    </div>
    
  )
}

export default App
