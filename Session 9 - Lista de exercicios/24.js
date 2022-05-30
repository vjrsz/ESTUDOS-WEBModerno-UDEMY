function buscarPalavrasSemelhantes(str, arr){
	res = []
	arr.forEach((e)=>{
		if(e.indexOf(str) > 0) res.push(e)
	})
	return res
}
buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []