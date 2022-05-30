function inverter (obj) {
	let newobj = {}
	let keys = Object.keys(obj)
	for (var i = 0; i < keys.length; i++) {
		newobj[obj[key]] = key[i] 
	}
	return newobj
}
inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}