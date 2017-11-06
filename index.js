// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
  const newObj = Object.assign({}, obj, { key : value })
  ///debugger;
  console.log(newObj)
  console.log(driver)
  ///debugger;
  return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  return obj.key = value
}
