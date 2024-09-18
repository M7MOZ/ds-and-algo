const bubbleSort = (arr) => {
  let swapped;
  
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swapped = true;
        const temp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
    }
  } while (swapped === true);
  console.log(arr);
  
};
const sortedArr = bubbleSort([20,5,14,23,0,8])
