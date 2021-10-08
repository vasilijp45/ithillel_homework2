function getIsEvenCalc(a,b) { // 1
  return a%2 ? a+b : a*b;
}

function getQuartersCordinate(x, y) { // 2
  if (x>0) {
    if (y>0) {
      return 1
    }
    return 4;
  }

  if (y>0) {
    return 2
  }
  return 3;
}

function calcPositiveSum(a, b, c) { // 3
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i] > 0 ? arguments[i] : 0;
  }
  return sum
}

function getMaxResult(a, b, c) { // 4
  if (a*b*c > a+b+c) {
    return a*b*c+3;
  }
  return a+b+c+3;
}

function getRatingStudy(a) { // 5
  let arr = [];
  for (let i = 0; i <= 100; i++) {
    let rating = 'F';
    rating = i > 19 ? 'E' : rating;
    rating = i > 39 ? 'D' : rating;
    rating = i > 59 ? 'C' : rating;
    rating = i > 74 ? 'B' : rating;
    rating = i > 89 ? 'A' : rating;
    arr[i] = rating;
  }
  return arr[a];
}

const resultCalcIsEven = getIsEvenCalc(4,3)
console.log(resultCalcIsEven);

const resultCordinateQuarters = getQuartersCordinate(4,-3)
console.log(resultCordinateQuarters);

const resultPositiveSum = calcPositiveSum(4,3,-5)
console.log(resultPositiveSum);

const resultMaxResult = getMaxResult(4,3,0.5)
console.log(resultMaxResult);

const resultStudyRating = getRatingStudy(55)
console.log(resultStudyRating);
