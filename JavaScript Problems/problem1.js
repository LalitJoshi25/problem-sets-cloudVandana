function reverseWordInSentence(sentence){
    // split the sentence into words
    let words = sentence.split(" ");

    // Iterate through the through the words reverse it and store it back
    for(let i = 0; i< words.length; i++){
        let word = words[i];
        let rWord = reverseWord(word);
        words[i] = rWord;
    }

    // joining the reverse words
    let reversedSentence = words.join(" ");
    return reversedSentence;
}

// reverseWord function convert the word into an array of characters, reverse it, and join it back
function reverseWord(word){
    let rWord = word.split("").reverse().join("");
    return rWord;
}

// Taking input from the user
let sentence = prompt("Enter sentence to be reverse");

// reverseWordInSentence function call
let reverseSentence = reverseWordInSentence(sentence);

console.log(reverseSentence);