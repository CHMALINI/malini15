console.log('3-landscape-portrait');

function isLandscape(width, height) {

    return (width > height);
}

let checkWidthHeight1 = isLandscape(800, 400);
console.log('Landscape:', checkWidthHeight1);

let checkWidthHeight2 = isLandscape(200, 600);
console.log('Landscape:', checkWidthHeight2);

let checkWidthHeight3 = isLandscape(1025, 268);
console.log('Landscape:', checkWidthHeight3);