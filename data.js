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