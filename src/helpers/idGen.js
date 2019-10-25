const idGen = (prefix) => `${prefix}-${Math.random().toString().replace('.', '')}`

export default idGen
