// return masked string
function maskify(cc) {
    let maskArray = [];
      for (let i = cc.length - 1; i >= 0; i--) {
        if ( (cc.length - 1) - i < 4) {
          maskArray.unshift(cc[i]);
        } else {
        maskArray.unshift("#");
          }
      }
      return maskArray.join("");
    }