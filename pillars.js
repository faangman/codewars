function pillars(numPill, dist, width) {
    // your code here
    if (numPill == 1) {
      return 0;
    } else {
      return Math.abs((numPill - 1) * dist * 100 + (numPill - 2) * width);
    }
  }