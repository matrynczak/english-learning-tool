const fs = require('fs')
fs.readFile('notes.txt', (err, inputD) => {
   if (err) throw err;
    const phrasesArray = inputD.toString().split("*");
    const phrasesArrayWithoutNewLineSign =  phrasesArray.map(line => line.replace("\r\n", "").replace(" ", ""));
    const phrasesSplittedToArrays = phrasesArrayWithoutNewLineSign.map(elem => [elem]).map(single => single[0].split(" - ")).slice(1);
    // const phrasesSplittedToArraysWithoutSpaces = phrasesSplittedToArrays.map(elem => {
    //     return [elem[0].replace(/[ \t]+$/gm, ""), elem[1].replace(/^[ \t]+/gm, "")];
    // })
    const englishPhrases = phrasesSplittedToArrays.map(elem => {
       return {
            [elem[0]] : elem[1]
        }
      })
        
    let jsonData = JSON.stringify(englishPhrases);
    let codeStr = `const englishPhrases = ${jsonData}; module.exports = englishPhrases;`;
    fs.writeFileSync("englishPhrases.js", codeStr, 'utf8',{ flag: "wx" }, function(err) {
        if (err) {
        return console.log(err);
        }
    });
})
