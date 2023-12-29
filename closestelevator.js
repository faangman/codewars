function elevator(left, right, call){
    // code on! :)
    if (Math.abs(call - left) > Math.abs(call - right) || right == call) {
      return "right";
    } else if (Math.abs(call - left) < Math.abs(call - right) || left == call) {
      return "left";
    } else if (Math.abs(call - left) == Math.abs(call - right)) {
      return "right";
    }
  }