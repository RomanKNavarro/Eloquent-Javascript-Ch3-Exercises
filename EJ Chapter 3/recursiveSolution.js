// RECURSION

function power(base, exponent) {
	if (exponent == 0) {
		return 1;
	} else {
		return base * power(base, exponent - 1);
	}
}
console.log(power(2, 3));

/* This func calls itself multiple times with ever smaller exponents to achiece the repeated
multiplication. However, the looping variant below V V V is faster b\c a simple loop's 
generally cheaper than multiple func calls */

function power2(base, exponent = 2) {
	let result = 1;
	for (let count = 0; count < exponent; count++) {
		result *= base;
	}
	return result;
}

console.log(power2(2, 3))

 /* Default optional arg: if "exponent" arg not given, default to 2. This func keeps 
 multiplying "base" with itself as long as "count < exponent" is true */

function findSolution(target) {
	function find(current, history) {
		if (current == target) {
			return history;
		} else if (current > target) {
			return null;
		} else {
			return find(current + 5, `(${history} + 5)`) || // this is the OR comp. operator
		           find(current * 3, `(${history} * 3)`);
		}
	}
	return find(1, "1");
}

console.log(findSolution(24));

/* This is an instance wherein Recursion is not an inefficient alternative to looping; most of 
these are problems that require exploring or processing several "branches", each of which might
branch out again into even more branches */

/* This is a recursive function (it calls itself) that, given a number, tries to find a sequence
 of multiplications of 5 and additions of 3 to reach that number, if possible. */

/* Here is step by step for findSolution(24):
1. findSolution calls find(1, "1")
