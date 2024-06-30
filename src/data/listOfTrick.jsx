function checkTrickOr(player, inputDir) {
  let keys = Object.keys(inputDir);
  for (let elem of keys) {
    if (player[elem] === undefined) {
      console.log("incorrect data: ", elem);
    }
    if (player[elem] >= inputDir[elem]) {
      return true;
    }
  }
  return false;
}

function checkTrickAnd(player, inputDir) {
  let keys = Object.keys(inputDir);
  for (let elem of keys) {
    if (player[elem] === undefined) {
      console.log("incorrect data: ", elem);
    }
    if (player[elem] < inputDir[elem]) {
      return false;
    }
  }
  return true;
}

export default function getListOfTricks(player, allTricks) {
  let toReturn = [];
  for (let elem of allTricks) {
    let isAndIsFulfilled = true;
    let isOrIsFulfilled = true;
    if (elem.and) {
      isAndIsFulfilled = checkTrickAnd(player, elem.and);
    }
    if (elem.or) {
      isOrIsFulfilled = checkTrickOr(player, elem.or);
    }
    if (isAndIsFulfilled && isOrIsFulfilled) {
      toReturn.push(elem);
    }
  }
  return toReturn;
}