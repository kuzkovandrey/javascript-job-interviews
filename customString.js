function customString(item = '*', ...args) {
  let length = args.length

  if(!length) return 'Arguments not found'

  return args.map((letter, index) => {
    return (index !== length - 1) ? letter + item : letter
  }).join('')
}

console.log(
  customString('*', '1', 'b', '1c')
)