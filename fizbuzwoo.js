function sol (n) {
	for(let i = 1; i <= n; i++) {
		let str = ''
		if(i % 3 && i % 5 && i % 7) {
			str += i
		} else {
			if(i % 3 === 0) str += 'Fizz'
			if(i % 5 === 0) str += 'Buzz'
			if(i % 7 === 0) str += 'Woof'
		}
		console.log(str)
	} 
}
sol(24)