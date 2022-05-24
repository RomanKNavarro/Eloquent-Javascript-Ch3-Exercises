//bean counting

function countBs(sentence) {
	bs = 0
	for (let current = 0; current <= sentence.length; current += 1) {
		if (sentence[current] == 'B') bs ++;
		else continue
	}
	return bs
}

console.log(countBs("Bitch Baby getcho dumBass in the Bus!"))

// FIX THIS SHIT