function sol(n) {
	const array = []
	for(let i = 1; i <= n / 2; i++) {
		array.push(i)
		array.push(-i)
	}
	return array.length === n ? array : [...array, 0]
}

console.log(sol(0))
console.log(sol(3))