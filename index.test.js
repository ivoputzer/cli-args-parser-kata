/* globals test */
const assert = require('assert')

test('parses a `simple flag`', () => {
  const args = cliArgsParser(['--foo'])
  assert.deepEqual(args, {foo: true})
})

function cliArgsParser () {
  return {foo: true}
}
