// Ex.: alcatra calc 1 2 3 --func=sum --result-only

const command = {
	name: 'calc',
	run: async (toolbox) => {
		const { print, parameters } = toolbox
		let signal = '+'
		let result

		const { func, resultOnly } = parameters.options

		switch(func) {
			case 'sum':
				result = parameters.array.reduce((total, i) => total + i)
				break
			
			case 'sub':
				result = parameters.array.reduce((total, i) => total - i)
				break

			default: 
				result = parameters.array.reduce((total, i) => total + i)
				break
		}

		if(resultOnly) {
			print.success(result)
		} else {
			print.success(`${parameters.array.join(` ${signal} `)} = ${result}`)
		}
	},
}

module.exports = command
