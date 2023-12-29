function fuelPrice(litres, pricePerLitre) {
    // your code here
    // Good luck with it!
    if (litres / 2 >= 5) {
      let overSum = litres * (pricePerLitre - 0.25);
      return Number(overSum.toFixed(2));
    } else {
      let sum =  litres * (pricePerLitre - (0.05 * Math.trunc(litres / 2)));
     return Number(sum.toFixed(2)); 
    }
  }