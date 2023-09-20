import React from "react";

export default function Character (props) {
    const {characters, setCharacters} = props;

    const resetCharacters = () => {
        setCharacters(null);
    }
    console.log(characters)
    return <div className="characters">
        <h1>Personajes</h1>
        <span className="back-home" onClick={resetCharacters}>Volver</span>
        <div className="container-characters">
            {characters.map((character, index) => (
                <div className="character-container" key={index}>
                    <div>
                        <img src={character.image} alt="character.name"></img>
                    </div>
                    <div>
                        <h3>{character.name}</h3>
                        <h6> {character.status === "Alive" ? (
                            <>
                                <spam className="alive" />
                                    Alive
                            </>
                        ) : (
                            <>
                                <spam className="dead" />
                                    Dead
                            </>
                        )}
                        </h6>
                        <p className="text-grey"><spam>Episodios en los que aparece: </spam> 
                            <spam>{character.episode.length}</spam>
                        </p>
                        <p className="text-grey"><spam>Especie: </spam> 
                            <spam>{character.species}</spam>
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <span className="back-home" onClick={resetCharacters}>Volver</span>
    </div>
}