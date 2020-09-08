const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(team) {
  let win = team.find(team => team.result === "W")
  if (win) {
    return win.year
  }
  else {
    return undefined
  }
}