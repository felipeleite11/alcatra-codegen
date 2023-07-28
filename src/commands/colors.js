const command = {
  name: 'colors',
  alias: ['color'],
  run: async (toolbox) => {
    const { print } = toolbox
   
    print.info('Default text')
    print.success('Success text')
    print.error('Error text')
    print.warning('Warn text')
  },
}

module.exports = command
