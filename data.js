// WRITE YOUR CODE BELOW THIS LINE
let favoriteBook =
{
	title: "Harry Potter and the Goblet of Fire",
	author: "J.K. Rowling",
	year: 2000,
	characters: ["Harry", "Ron", "Hermione", "Fred"],
	age: function (currentYear) {
		return currentYear - favoriteBook.year
	}

};

let ageOfMyFavBook = favoriteBook.age(2022);
console.log(ageOfMyFavBook)
console.log(console)
console.log(console.log)

for (let i = 0; i < 5; i++) {
	console.count("x")
};
console.log(Object.keys(favoriteBook));

let aNumber = 27;
console.log(aNumber.toString());

let writers = "George Orwell, Ernest Hemingway, Jane Austen, Agatha Christie, Oscar Wilde";
let writersArray = writers.split(", ");
writersArray[0] = "Szerb Antal";


let joinWriters = writersArray.join(" + ");


writersArray.push("Kassak Lajos");
writersArray.push("Niwin");

console.log(writersArray);




// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;


try {
	toExport = [
		{ name: "favouriteBook", content: favouriteBook, type: "object" },
		{ name: "ageOfMyFavBook", content: ageOfMyFavBook, type: "number" },
		{ name: "aNumber", content: aNumber, type: "number" },
		{ name: "writers", content: writers, type: "string" },
		{ name: "writersArray", content: writersArray, type: "array" },
		{ name: "joinWriters", content: joinWriters, type: "string" }
	]
} catch (error) {

	toExport = { error: error.message }

}

export { toExport };
