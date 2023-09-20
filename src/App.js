
import { useState } from 'react';
import './App.css';
import imgageRickMorty from './img/rick-morty.png'
import Character from './components/Character';

function App() {

  const [characters, setCharacters] = useState (null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json ();
    setCharacters(characterApi.results)
    console.log (characters);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters ? (<Character characters = {characters} setCharacters={setCharacters} />) : (
          <>
            <img src={imgageRickMorty} className='img-home' alt='Rick & Morty' />
            <button onClick={reqApi} className='btn-search'>Buscar</button>
          </>
        )}
        
        
      </header>
    </div>
  );
}

export default App;
