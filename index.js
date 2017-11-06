// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj = Object.assign({}, driver, { key : value })
  debugger;
  console.log(newObj)
  console.log(driver)
  debugger;
  return newObj
}

function destructivelyUpdatedriverWithKeyAndValue(driver, key, value) {
  return driver.key = value
}