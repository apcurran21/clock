function moveHands() {
    with (new Date()) { 
        h = 30 * ((getHours() % 12) + getMinutes() / 60); //30 degrees for one hour
        m = 6 * getMinutes(); //6 degrees for each minute
        s = 6 * getSeconds(); //6 degrees every second
        // begin setting the rotate CSS attribute to those degree values ..
        document.getElementById("seconds").style.cssText = "-webkit-transform:rotate(" + s + "deg);";
        document.getElementById("minutes").style.cssText = "-webkit-transform:rotate(" + m + "deg);";
        document.getElementById("hours").style.cssText = "-webkit-transform:rotate(" + h + "deg);";

        setTimeout(moveHands, 1000); //calling the func each second
    }
}

window.onload = moveHands; //makes tsure the functions starts runing on the load of a webpage