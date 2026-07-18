function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2) {
  const arr3 = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr3.push(arr1[i]);
      i++;
    } else {
      arr3.push(arr2[j]);
      j++;
    }
  }

  if (i >= arr1.length) {
    arr3.push(...arr2.slice(j, arr2.length));
  }

  if (j >= arr2.length) {
    arr3.push(...arr1.slice(i, arr1.length));
  }

  return arr3;
}
