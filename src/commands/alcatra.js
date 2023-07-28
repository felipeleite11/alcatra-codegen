const command = {
  name: 'alcatra',
  run: async (toolbox) => {
    const { print } = toolbox

    print.success('\nWelcome to Alcatra CLI!\n')
    print.info('You can generate some codes here.\n')
  }
}

module.exports = command
