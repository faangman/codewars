var countSheep = function (num) {
    //your code here
    let countArray = [];
    if (num == 0) {
      return "";
    } else {
      for (let i = 1; i <= num; i++) {
        const count = i + " sheep...";
        countArray.push(count);
      }
   }
    return countArray.join("");
  }