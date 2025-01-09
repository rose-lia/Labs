const {
    translateToPigLatin
} = require("./functions")

describe("translateToPigLatin(word)", () => {
	it("translates words that start with vowels", () => {
		expect(translateToPigLatin("underwater")).toEqual("underwaterway")
		expect(translateToPigLatin("else")).toEqual("elseway")
        expect(translateToPigLatin("octopus")).toEqual("octopusway")
        expect(translateToPigLatin("apple")).toEqual("appleway")
        expect(translateToPigLatin("igloo")).toEqual("iglooway")
        expect(translateToPigLatin("yogurt")).toEqual("yogurtway")
	})
    it("translates words that start with one consonant", () => {
		expect(translateToPigLatin("giraffe")).toEqual("iraffegay")
		expect(translateToPigLatin("turmeric")).toEqual("urmerictay")
	})
    it("translates words that start with two consonants", () => {
		expect(translateToPigLatin("fragile")).toEqual("agilefray")
	})
    it("translates words that start with three consonants", () => {
		expect(translateToPigLatin("scream")).toEqual("eamscray")
	})
    it("translates letters to all lowercase", () => {
		expect(translateToPigLatin("Florida")).toEqual("oridaflay")
	})
})