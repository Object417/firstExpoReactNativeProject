function objOmit(keys, obj) {
  Object.fromEntries(
    Object.entries(obj).filter((entry) => !keys.includes(entry[0]))
  )
}

export default objOmit
