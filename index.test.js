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
test('parse a `composite` flags with integer values', () => {
  const args = cliArgsParser(['--number', '1'])
  assert.deepEqual(args, {number: 1})
})

function cliArgsParser (args) {
  return args.reduce((acc, arg, i, args) => {
    const next = args[i + 1]
    const argAsKey = arg.replace(/^--/, '')
    if (arg.startsWith('--')) {
      let value = (next && next.startsWith && !next.startsWith('--')) ? next : true
      if (parseInt(value) === +value) value = parseInt(value)

      acc[argAsKey] = value
    }
    return acc
  }, {})
}
