function getRandomItems(source = [], iterations = 0, duplicatesOk = false) {
  const sourceCopy = [...source]
  const res = []

  for (let i = 0; i < iterations; i++) {
    const randomIndex = Math.floor(Math.random() * sourceCopy.length)
    const randomItem = sourceCopy[randomIndex]
    res.push(randomItem)

    // Remove item from the copy to ensure that it won't appear twice
    // (if duplicates aren't allowed)
    duplicatesOk || sourceCopy.splice(randomIndex, 1)
  }

  return res
}

export default getRandomItems
