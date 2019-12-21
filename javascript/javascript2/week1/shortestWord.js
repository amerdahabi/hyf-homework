const danishWords = ['bil', 'plante', 'o', 'kaffe', 'bog', 'planetarium'];

let wordLength = [];
function shortWord(danishWords){
    for (let i = 0; i < danishWords.length; i++){
        wordLength[i] = danishWords[i].length;
    }    
    let v = Math.min(...wordLength);
    for (let x = 0; x < danishWords.length; x++){
        if (v === wordLength[x]){
            return danishWords[x]
        }
    }
}
let resault = shortWord(danishWords)
console.log(resault)