const qA = {0: 'rafael', 1:'ana', 2:'bia'}
console.log(qA)
Object.defineProperty(qA, 'toString', {
	value: function () {
		return Object.values(this)
	}
	enumerable: false
})

console.log(qA.0)

const mA = ['rafael', 'ana', 'bia']
console.log(qA.toString(), mA)