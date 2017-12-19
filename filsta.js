function sol (a, x, y, z) {
	let wait = 0
	let disp = {
		'x': {fuel: x, time: 0, open: true},
		'y': {fuel: y, time: 0, open: true},
		'z': {fuel: z, time: 0, open: true}
	}
	function fuel(car, d) {
		wait = disp[d].time > wait ? disp[d].time : wait 
		disp[d].fuel -= car
		disp[d].time = car
		disp[d].open = false
	}
	for(let car of a) {
		if(car <= disp.x.fuel) fuel(car, 'x')
		else if(car <= disp.y.fuel) fuel(car, 'y')
		else if(car <= disp.z.fuel) fuel(car, 'z')
		else return -1
	}
	return wait
}

console.log(sol([2, 8, 4, 3, 2], 7, 11, 3))
console.log(sol([5], 4, 0, 3))

