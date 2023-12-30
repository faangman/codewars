function getIssuer(number) {
    // Code your solution here
    let numberStr = String(number);
    if (numberStr[0] == 3 && (numberStr[1] == 4 || numberStr[1] == 7) && numberStr.length == 15) {
      return "AMEX";
    } else if (numberStr[0] == 6 && numberStr[1] == 0 && numberStr[2] == 1 && numberStr[3] == 1 && numberStr.length == 16) {
      return "Discover";
    } else if (numberStr[0] == 4 && (numberStr.length == 13 || numberStr.length == 16)) {
      return "VISA";
    } else if (numberStr[0] == 5 && (numberStr[1] == 1 || numberStr[1] == 2 || numberStr[1] == 3 || numberStr[1] == 4 || numberStr[1] == 5) && numberStr.length == 16) {
      return "Mastercard";
    } else {
      return "Unknown";
    }
  }