exports.parse = (args, {isArray} = Array) => {
  return parseArgs(isArray(args) ? args.join(' ') : args)
}

function parseArgs (args, re = /(?:(--?\w+)(?:\s([.\w]+))?)/gi) {
  const obj = {}
  while (-1) {
    try {
      const [, key, value = true] = re.exec(args)
      obj[key.slice(2)] = value
    } catch (e) {
      return obj
    }
  }
}
