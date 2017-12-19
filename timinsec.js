function sol (t) {
	let h, m, s
	h = Math.floor(t / (60*60))
	m = Math.floor((t - h * 60 * 60) / 60)
	s = t - h * 60 * 60 - m * 60
	return `${h}h${m}m${s}s`
}
console.log(sol(83643))