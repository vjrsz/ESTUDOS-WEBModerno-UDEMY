function filtrarNumeros (array) {
	 array.map((e, i, arr) => {
	 	if(typeof e != 'number'){
	 		arr = arr.slice(i, 1)
	 	}else{
	 		return e
	 	}
	 })
}
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará []
