import { useState, useEffect } from "react";
import axios from "axios";

const CharacterDetail = ({ selectedCharacter, onCharacterSelect }) => {
    //Task 3
    /*const [characterInfo, setCharacterInfo] = useState([]);

    useEffect(() => {
        const fetchCharacterInfo = async () => {
            try {
                //Set your own timetamp, apikey and hash
                const ts = '1';
                const apikey = '';
                const hash = '';

                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=${ts}&apikey=${apikey}&hash=${hash}`);
                setCharacter(response.data.data.results);
            } catch (error) {
                console.log('Error fetching products', error);
            }
    }, [characterId]);*/
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [comics, setComics] = useState([]);
    

    useEffect(() => {
        if (selectedCharacter) {
            setName(selectedCharacter.name);
            setDesc(selectedCharacter.description);
            setComics(selectedCharacter.comics.items);
        }
    }, [selectedCharacter]);

    return (
        <div className="character-detail">
            
            <div>
                <h2>{name}</h2>
                <h3 className="h3-detail">Description</h3>
                {desc === "" ? (
                    <p>This Character has no description on Marvel's site</p>
                ) : (
                    <p>{desc}</p>
                )}
                <h3 className="h3-detail">Comics "{name}" Appears In</h3>
                {!comics[0] ? (
                    <p>This character is featured in no comics on Marvel's website.</p>
                ) : (
                    <ul>
                        {comics.map((comic, index) => (
                            <li key={index}>{comic.name}</li>
                        ))}
                    </ul>
                )}
                
            </div>
            
            
        </div>
    )
}

export default CharacterDetail