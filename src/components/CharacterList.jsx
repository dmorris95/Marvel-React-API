//import { useState, useEffect } from "react";
import axios from "axios";


const CharacterList = ({ characters, onCharacterSelect }) => {
    //Task 2
    /*const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                //Set your own timetamp, apikey and hash
                const ts = '1';
                const apikey = '9aff768027d14b054c4aeb92ed0f7b2d';
                const hash = 'dcb99ef8d98b0e151e6822861f254100';

                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=25`);
                setCharacters(response.data.data.results);
            } catch (error) {
                console.log('Error fetching products', error);
            }
        }
        if(charId) {
            fetchCharacters()
        }

    }, [charId]);*/

    return (
        <div className="character-list">
            <h3>Marvel Characters</h3>
            
            <div className="grid-container">
                {characters.map(character => (
                    <div key={character.id} onClick={() => onCharacterSelect(character)}>
                        <img src={character.thumbnail.path+'.'+character.thumbnail.extension} />
                        <p>{character.name}</p>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default CharacterList