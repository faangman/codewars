function alternate(n, firstValue, secondValue){
    // your code
    let array = [];
    if (n == 0) {
      return [];
    } else {
      for (let i = 0; i < n; i++) {
        if (i % 2 == 0) {
          array.push(firstValue);
        } else {
          array.push(secondValue);
        }
      }
    }
   return array;
  }