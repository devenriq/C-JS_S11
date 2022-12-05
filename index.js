const arr1 = [1, 2, 3, 4, 50, 0, 0, -1, -2, -3, -40];
const arr2 = [0, 0, 3, 4, 50, 0, 0, 0, -2, -3, -40];
const arr3 = [1, 2, 3, 4, 50, 0, 0, -1, -2, -3, -40];
const arr4 = [1, 2, 3, 4, 50, 0, 0, -1, -2, -3, -40];

const numCount = (arr) => {
  let negatives = 0;
  let zeros = 0;
  let positives = 0;

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element < 0) {
      negatives++;
    } else if (element == 0) {
      zeros++;
    } else {
      positives++;
    }
    // console.log(element);
  }
  console.log(`
    Hay ${negatives} números negativos
    Hay ${zeros} números ceros
    Hay ${positives} números positivos
  `);
};

numCount(arr1);
numCount(arr2);
