import { useEffect, useState } from "react";
import { getWordSymbol } from '../../helpers/helpFunctions';
import './PhraseHidden.scss';

export const PhraseHidden = ({word}) => {
    const [phrase ,setPhrase] = useState("")
    const [phraseArray, setPhraseArray] = useState([]);
    const [index, setIndex] = useState(null);
    const [showWord, setShowWord] = useState(false);

    const getSymbolsArray = (arg) =>  arg.map(l => "___");

    useEffect(() => {
       setPhrase(word);
       setPhraseArray([]);
       setShowWord(false);
    }, [word]);

    useEffect(() => {
        setPhraseArray(getSymbolsArray(phrase.split('')));
    }, [phrase]);

    const showLetter = (index) => {
        setIndex(index);
        let tempArray = phraseArray;
        tempArray[index] = phrase.charAt(index);
        setPhraseArray(tempArray); 
    }

    const showWholeWord = () => {
        setShowWord(true); 
    }

    const renderWord = () => {
        return (
            <ul className="hidden-word">
                {
                    phraseArray.map((l, index) => 
                        <li>
                            * <span className="letter" onClick={() => showLetter(index)}>{l}</span> *
                        </li>
                    )
                }
            </ul>
        )
    }

    return (
        <div>
            {renderWord()}
            <div className="buttons-section">
                <button className="letter-button" onClick={showLetter}>Letter</button>
                <button className="show-word-button" onClick={showWholeWord}>Show word</button>
            </div>
            
            { showWord && <p className="shown-word">{phrase}</p>}
        </div>           
       
    )
}