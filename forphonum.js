function sol (s) {
	let final = '', lim = 3, count = 0, d = s.match(/\d/g)
	for(let i = 0; i < d.length; i++) {
		final += d[i]
		count++
		if(count === 1 && i + 4 === d.length) lim = 2
		if(count === lim && i !== d.length - 1) {
			final += '-'
			count = 0 
		}
	}
	return final
}
console.log(sol('00-44 48 5555 8361'))
console.log(sol('0 - 22 1985--324'))