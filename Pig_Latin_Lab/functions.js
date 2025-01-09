const translateToPigLatin = (word) => {
    const vowels = ["a", "e", "i", "o", "u", "y"]
        if (vowels.includes(word[0])) {
        return word + "way"
        }
    word = word.toLowerCase()

let firstVowelIndex = -1;
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            firstVowelIndex = i;
            break;
        }
    }

return word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + "ay";
}

module.exports = {
    translateToPigLatin
}