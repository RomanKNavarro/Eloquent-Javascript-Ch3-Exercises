//recursion (odd/even)

function isEven(num){
	if (num == 0) {
		return "even"
	} else if (num == 1) {
		return "odd"
	} else {
		return isEven(num - 2)
	}
}

console.log(isEven(15))