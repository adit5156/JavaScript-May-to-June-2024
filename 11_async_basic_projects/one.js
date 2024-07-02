// generate random color

const randomColorHex = function () {
    let hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}

const randomColorRGB = function() {
    let ran1 = Math.floor(Math.random() * 256);
    let ran2 = Math.floor(Math.random() * 256);
    let ran3 = Math.floor(Math.random() * 256);
    let color = `rgb(${ran1}, ${ran2}, ${ran3})`;
    console.log(color);
    return color;
  }

// events for start & stop button

const backgroundColorChanger = function () {
    document.body.style.backgroundColor = randomColorRGB();
}

let intervalId;

const startBackgroundChange = function (e) {
    if (!intervalId) {
        intervalId = setInterval(backgroundColorChanger, 1000);
    }
}

const endBackgroundChange = function (e) {
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector("#start").addEventListener("click",
    startBackgroundChange);

document.querySelector("#stop").addEventListener("click", endBackgroundChange);