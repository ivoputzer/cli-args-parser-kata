test('cli args parser kata', () => {
  const {deepEqual} = require('assert')
  const {parse} = require('..')

  test('string like arguments', () => {
    test('parses a `simple flag`', () => {
      const args = parse('--foo')
      deepEqual(args, {foo: true})
    })

    test('parse a `composite` flag', () => {
      const args = parse('--foo bar')
      deepEqual(args, {'foo': 'bar'})
    })

    test('parse a `composite` flags with integer values', () => {
      const args = parse('--number 1')
      deepEqual(args, {number: 1})
    })

    test('parse multiple flags at once', () => {
      const args = parse('--foo --bar baz --number 1')
      deepEqual(args, {'bar': 'baz', 'foo': true, 'number': 1})
    })
  })

  test('array like arguments', () => {
    test('parses a `simple flag`', () => {
      const args = parse(['--foo'])
      deepEqual(args, {foo: true})
    })

    test('parse a `composite` flag', () => {
      const args = parse(['--foo', 'bar'])
      deepEqual(args, {'foo': 'bar'})
    })

    test('parse a `composite` flags with integer values', () => {
      const args = parse(['--number', '1'])
      deepEqual(args, {number: 1})
    })

    test('parse multiple flags at once', () => {
      const args = parse(['--foo', '--bar', 'baz', '--number', '1'])
      deepEqual(args, {'bar': 'baz', 'foo': true, 'number': 1})
    })
  })
})
