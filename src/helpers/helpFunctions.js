export const getRandomElem = (arr) => {
    const rnd = Math.floor(Math.random() * arr.length);
    console.log("ZZZZZ", rnd)
    return arr[(Math.floor(Math.random() * arr.length))]
};

export const getWordSymbol = (word) => word.split("");