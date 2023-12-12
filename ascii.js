////CREATION AND COMPUTATION 2023
////EXPERIMENT 4 - TAKE A <br>
////Kunal Devi, Nikhil Thomas, Abha Patil, Madhu Priya
////Presented in the DF Open Show on December 7, 2023



// Image to ASCII
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/166-ascii-image.html
// https://youtu.be/55iwMYv8tGI

// ASCII video: https://editor.p5js.org/codingtrain/sketches/KTVfEcpWx
// ASCII image canvas: https://editor.p5js.org/codingtrain/sketches/r4ApYWpH_
// ASCII image DOM: https://editor.p5js.org/codingtrain/sketches/ytK7J7d5j
// ASCII image source text: https://editor.p5js.org/codingtrain/sketches/LNBpdYQHP
// ASCII image weather API: https://editor.p5js.org/codingtrain/sketches/DhdqcoWn4

// const density = "Ñ@#W$9876543210?!abc;:+=-,._                    ";
// const density = "              _.-,=:+;cba?!0123456789$W#@Ñ";
const density = "                   .,-  ~:;=!*#$@NBSZ@Ñ@#";
// const density = '       .:-i|=+%O#@'
// const density = '        .:░▒▓█';

let video;
let asciiDiv;
let imageDiv;
let staticImage;

// function preload() {
//   staticImage = loadImage("Static1.jpg");
// }

function setup() {
    noCanvas();
    // image(static, 0, 0);
    video = createCapture(VIDEO);
    video.size(200, 110);
    video.hide();
    asciiDiv = createDiv();
    // asciiDiv.position(0, 0);

    //   imageDiv = createDiv();
    //   // imageDiv.size(20, 20);
    //   // imageDiv.position(0, 0);
    //   imageDiv.child(createImg(staticImage));
}

function draw() {
    video.loadPixels();
    let asciiImage = "";
    for (let j = 0; j < video.height; j += 2) {
        // Increase the step size for rows
        for (let i = 0; i < video.width; i++) {
            // Calculate the mirrored pixel index
            const mirroredI = video.width - 1 - i;

            let pixelIndex = (mirroredI + j * video.width) * 4;
            let r = video.pixels[pixelIndex + 0];
            let g = video.pixels[pixelIndex + 1];
            let b = video.pixels[pixelIndex + 2];
            let avg = (r + g + b) / 3;

            if (avg > 1300) {
                video.pixels[pixelIndex + 0] = 255;
                video.pixels[pixelIndex + 1] = 0;
                video.pixels[pixelIndex + 2] = 255;
            } else {
                const len = density.length;
                const charIndex = floor(map(avg, 0, 255, 0, len));
                const c = density.charAt(charIndex);
                if (c == " ") asciiImage += "&nbsp;";
                else asciiImage += c;
            }
        }
        asciiImage += "<br/>";
    }
    asciiDiv.html(asciiImage);
}
