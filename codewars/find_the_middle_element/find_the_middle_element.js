var gimme = function (inputArray) {
    let min = inputArray[0], max = inputArray[0]
    for (let i=0; i<inputArray.length;i++){
      if (inputArray[i] > max) max = inputArray[i]
      if (inputArray[i] < min) min = inputArray[i]
    }
    let middleIndex = inputArray.findIndex(element => element !== min && element !== max)
    return middleIndex;
  };