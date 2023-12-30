function countBy(x, n) {
    let array = [];
    let num = x;
    let numUp = x;
    for (let i = 0; i < n; i++) {
      array.push(x);
      x += numUp;
    }
    return array;
  }