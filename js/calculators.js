function calculateBricks() {

    const length = parseFloat(document.getElementById("wallLength").value);
    const height = parseFloat(document.getElementById("wallHeight").value);

    if (isNaN(length) || isNaN(height)) {
        document.getElementById("brickResult").innerText = "Enter valid dimensions.";
        return;
    }

    const wallArea = length * height;

    // Approximate 60 bricks per square meter
    const bricksRequired = wallArea * 60;

    document.getElementById("brickResult").innerText =
        `Estimated bricks required: ${Math.ceil(bricksRequired)} bricks`;
}
function calculateCement() {

    const length = parseFloat(document.getElementById("slabLength").value);
    const width = parseFloat(document.getElementById("slabWidth").value);
    const thickness = parseFloat(document.getElementById("slabThickness").value);

    if (isNaN(length) || isNaN(width) || isNaN(thickness)) {
        document.getElementById("cementResult").innerText = "Enter valid dimensions.";
        return;
    }

    const volume = length * width * thickness;

    // 6.3 bags per cubic meter
    const cementBags = volume * 6.3;

    document.getElementById("cementResult").innerText =
        `Estimated cement required: ${Math.ceil(cementBags)} bags (50kg each)`;
}
function calculateTiles() {

    const roomLength = parseFloat(document.getElementById("roomLength").value);
    const roomWidth = parseFloat(document.getElementById("roomWidth").value);
    const tileLength = parseFloat(document.getElementById("tileLength").value);
    const tileWidth = parseFloat(document.getElementById("tileWidth").value);

    if (isNaN(roomLength) || isNaN(roomWidth) || isNaN(tileLength) || isNaN(tileWidth)) {
        document.getElementById("tileResult").innerText = "Enter valid dimensions.";
        return;
    }

    const floorArea = roomLength * roomWidth;

    // convert cm² to m²
    const tileArea = (tileLength / 100) * (tileWidth / 100);

    const tilesRequired = floorArea / tileArea;

    // add 5% wastage
    const finalTiles = tilesRequired * 1.05;

    document.getElementById("tileResult").innerText =
        `Estimated tiles required: ${Math.ceil(finalTiles)} tiles`;
}
