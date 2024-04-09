import './App.css';
import { PhraseShown } from './components/phraseShown/PhraseShown';
import { useEffect, useState } from 'react';
import { getRandomElem } from './helpers/helpFunctions';
import { PhraseHidden } from './components/phraseHidden/PhraseHidden';
const englishPhrases = require('./helpers/englishPhrases.js');

function App() {  
  const [drawnPhrase, setDrawnPhrase] = useState({key: ""});
  
  useEffect(() => {
    getWord();
  }, [])

  const getWord = () => {
    const phrase = getRandomElem(englishPhrases);
    const rnd = [0,1][(Math.round(Math.random() * 2))];
    const setPhrase = rnd === 0 ? Object.entries(phrase).reduce((acc, [key, value]) => (acc[value] = key, acc), {}) : phrase;
    setDrawnPhrase(setPhrase);
  }

  return (
    <div className="App">
      <PhraseShown word={Object.keys(drawnPhrase)} allowedToShow={true}/>
      <button className='next-button' onClick={getWord}>Next!</button>
      <PhraseHidden word={drawnPhrase[Object.keys(drawnPhrase)]}/>
    </div>
  );
}

export default App;
