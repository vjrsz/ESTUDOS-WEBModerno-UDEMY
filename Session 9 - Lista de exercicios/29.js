function recerberMelhorEstudante (obj) {
	let maiormedia = -1
	let keyMMedia = ''
	Object.keys(obj).forEach( function(element) {
		let media = 0
		obje[e].forEach( function(element) {
			media += element
		});
		if(media > maiormedia){
			keyMMedia = e
			maiormedia = media
		}
	});
	return obj[keyMMedia]
}
recerberMelhorEstudante({
Joao: [8, 7.6, 8.9, 6], // média 7.625
Mariana: [9, 6.6, 7.9, 8], // média 7.875
Carla: [7, 7, 8, 9] // média 7.75
}) // retornará { nome: "Mariana", media: 7.875 }