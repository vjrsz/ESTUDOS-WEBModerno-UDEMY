const pilotos = ['vettel', 'alonso', 'haikkonen', 'massa']
pilotos.pop()
console.log(pilotos)

pilotos.push('vestappen')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift()
console.log(pilotos)

pilotos.slice(2, 0, 'bottas', 'massa')
console.log(pilotos)

pilotos.slice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)