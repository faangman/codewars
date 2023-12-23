function neutralisation(s1, s2) {
    var arrayResult = [];
    if (s1.length == s2.length) {
        for (var i =0; i < s1.length; i++) {
            if (s1[i] === "+" && s2[i] === "+") {
                arrayResult.push("+");
            } else if (s1[i] === "-" && s2[i] === "-") {
                arrayResult.push("-");
            } else if (s1[i] === "+" && s2[i] === "-") {
                arrayResult.push("0");
            } else if (s1[i] === "-" && s2[i] === "+") {
                arrayResult.push("0");
            }
        }
    }
    var stringResult = arrayResult.join("");
    return stringResult;