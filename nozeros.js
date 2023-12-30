function noBoringZeros(n) {
    // your code
    let string = String(n);
    for (let i = string.length - 1; i >=0; i--) {
      if (string[i] == 0) {
        string = string.slice(0, -1);
      } else {
        return Number(string);
      }
    }
    return Number(string);
  }