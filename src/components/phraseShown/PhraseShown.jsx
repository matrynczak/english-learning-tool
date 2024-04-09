import { useEffect, useState } from "react";
import './PhraseShown.scss';

export const PhraseShown = ({word, allowedToShow}) => {
    const [phrase, setPhrase] = useState('');


    useEffect(() => {
        if(allowedToShow) {
            setPhrase(word);
        }
    }, [word])

    return (
        <h1 className="phrase-shown">
            {phrase}
        </h1>
    )
}