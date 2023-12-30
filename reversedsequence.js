const reverseSeq = n => {
    let array = [];
    let a= n;
    for (let i = n; i > 0; i--) {
      array.push(a);
      a--;
    }
    return array;
  };