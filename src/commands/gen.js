const { capitalize } = require('../utils/string')

const availableTypes = ['page', 'component']

function validateType(type) {
	if(!type) {
		throw new Error('Type is required.')
	}

	if(!availableTypes.includes(type)) {
		throw new Error(`The type ${type} is not available.`)
	}
}

function validateAndNormalizeName(name) {
	if(!name) {
		throw new Error('Name is required.')
	}

	return name = capitalize(name)
}

module.exports = {
	name: 'gen',
	description: 'Create a new React component.',
	run: async toolbox => {
		const { 
			parameters, 
			template, 
			filesystem,
			print: { success, error } 
		} = toolbox
	
		let { 
			first: type, 
			second: name 
		} = parameters

		try {
			validateType(type)
			name = validateAndNormalizeName(name)

			const typeDescription = type === 'page' ? 'Page' : 'Component'
			const isTypeStript = await filesystem.exists('tsconfig.json')
			const extension = isTypeStript ? 'tsx' : 'js'

			const {
				wrapper = 'div', 
				path = `src/${type}s/${name}.${extension}`
			} = parameters.options

			await template.generate({
				template: 'template.js.ejs',
				target: path,
				props: { 
					name, 
					wrapper
				}
			})

			success(`\n${typeDescription} ${path}/index.${extension} was generated!\n`)
		} catch(e) {
			error(e.message)
		}
	}
}