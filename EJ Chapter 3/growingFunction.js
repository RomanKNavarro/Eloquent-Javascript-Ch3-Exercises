function printFarmInventory(cows, chickens) {
	let cowString = String(cows);
	while (cowString.length < 3) {
		cowString = "0" + cowString;
}
	console.log(`${cowString} Cows`);
	let chickenString = String(chickens);
	while (chickenString.length < 3) {
		chickenString = "0" + chickenString;
	}
	console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);

/* two args: number of cows and num of chickens.
Prints number of each. Length of a str can be 
acquired with ".length". If length is less than
3, the str is padded on the right with 0's. This 
func is inefficient b/c it has repeating code. 

Here is an improved version: */

function printZeroPaddedWithLabel(number, label) {
	let numberString = String(number);
	while (numberString.length < 3) {
		numberString = "0" + numberString;
	}
	console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
	printZeroPaddedWithLabel(cows, "Cows");
	printZeroPaddedWithLabel(chickens, "Chickens");
	printZeroPaddedWithLabel(pigs, "Pigs");
	}

/* It works; printFarmInventory() calls 
printZeroPaddedWithLabel() for each animal. However,
the func name is awkward to type; It conflates 3 
things: printing, zero-padding, and label-adding.

Let the name represent a singls concept:  */

function zeroPad(number, width) {
	let string = String(number);
		while (string.length < width) {
			string = "0" + string;
		}
		return string;
	}
function printFarmInventory(cows, chickens, pigs) {
	console.log(`${zeroPad(cows, 3)} Cows`);
	console.log(`${zeroPad(chickens, 3)} Chickens`);
	console.log(`${zeroPad(pigs, 3)} Pigs`);
}
printFarmInventory(7, 16, 3);

/* The improved padding func takes a number and width
(determines how many zeroes get printed). In the func 
that does the calling, 