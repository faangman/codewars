function flickSwitch (arr) {
    var outputArray = [];
    var flickCount = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "flick" && flickCount == false) {
            flickCount = true;
            outputArray[i] = false;
        } else if (arr[i] == "flick" && flickCount == true) {
            flickCount = false;
            outputArray[i] = true;
        } else if (arr[i] !== "flick" && flickCount == false) {
            outputArray[i] = true;
        } else if (arr[i] !== "flick" && flickCount == true) {
            outputArray[i] = false;
        }
    } 
    return outputArray;
};