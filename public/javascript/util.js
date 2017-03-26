const toPgArray = (jsonArray) => {
  const stringArray = JSON.parse(jsonArray).toString()
  return `{${stringArray}}`
}

module.exports = {
  toPgArray
}
