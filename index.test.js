/* globals test */
const assert = require('assert')

test('parses a `simple flag`', () => {
  const args = cliArgsParser(['--foo'])
  assert.deepEqual(args, {foo: true})
})
test('parse a `composite` flag', () => {
  const args = cliArgsParser(['--foo', 'bar'])
  assert.deepEqual(args, {'foo': 'bar'})
})

function cliArgsParser (args) {
  return args.reduce((acc, arg, i, args) => {
    const next = args[i + 1]
    const argAsKey = arg.replace(/^--/, '')
    if (arg.startsWith('--')) {
      const value = (next && next.startsWith && !next.startsWith('--')) ? next : true
      acc[argAsKey] = value
    }
    return acc
  }, {})
}
