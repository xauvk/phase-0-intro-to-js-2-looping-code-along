function writeCards(names, event) {
  const newArray = []
  for (let i = 0; i < names.length; i++) {
    newArray[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
  }
  return newArray
}

function countDown(num) {
  for (let i = num; i > -1; i--) {
    console.log(i)
  }
}