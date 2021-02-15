let myInput = document.getElementById("inputColor");
let hexColor = document.getElementById("hexColor");
let rgbColor = document.getElementById("rgbColor");
let hslColor = document.getElementById("hslColor");

getInputValue();
showHex();

function getInputValue() {
    let color = myInput.value;
    console.log(color);
    hexColor.innerHTML = "HEX: " + color;
    rgbColor.innerHTML = "RGB: " + hexToRgb(color);
    hslColor.innerHTML = "HSL: " + rgbToHsl(hexToRgb(color));

}

function showHex() {
    hexColor.innerHTML;
}







//HEX TO RGB
function hexToRgb(color) {
    let hexR = color.substring(1, 3);
    let hexG = color.substring(3, 5);
    let hexB = color.substring(5, 7);

    let r = hexToDec(hexR);
    let g = hexToDec(hexG);
    let b = hexToDec(hexB);

    result = r + ", " + g + ", " + b;
    return result;
}

function hexToDec(x) {
    let rgbX = parseInt(x, 16);
    return rgbX;
}

//RGB TO HEX
function rgbToHex(color) {
    let rgbR = color.r;
    let rgbG = color.g;
    let rgbB = color.b;

    let r = hexToStr(rgbR);
    let g = hexToStr(rgbG);
    let b = hexToStr(rgbB);

    let hexColor = "#" + r + g + b;

    console.log(hexColor);
}

function hexToStr(x) {
    let hexX = x.toString(16);
    return hexX;
}

function rgbToHsl(r,g,b) {
    r /= 255;
    g /= 255;
    b /= 255;

    let h, s, l;

    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);

    if (max === min) {
        h = 0;
    } else
    if (max === r) {
        h = 60 * (0 + (g - b) / (max - min));
    } else
    if (max === g) {
        h = 60 * (2 + (b - r) / (max - min));
    } else
    if (max === b) {
        h = 60 * (4 + (r - g) / (max - min));
    }

    if (h < 0) {
        h = h + 360;
    }

    l = (min + max) / 2;

    if (max === 0 || min === 1) {
        s = 0;
    } else {
        s = (max - l) / (Math.min(l, 1 - l));
    }
    // multiply s and l by 100 to get the value in percent, rather than [0,1]
    s *= 100;
    l *= 100;

    console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
}