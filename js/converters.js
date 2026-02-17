const lengthUnits = {
    meter: 1,
    feet: 3.28084,
    km: 0.001,
    mile: 0.000621371
};

function convertLength() {

    const value = parseFloat(document.getElementById("inputValue").value);
    const from = document.getElementById("fromUnit").value;
    const to = document.getElementById("toUnit").value;

    if (isNaN(value)) {
        document.getElementById("result").innerText = "Enter a valid number.";
        return;
    }

    const valueInMeters = value / lengthUnits[from];
    const result = valueInMeters * lengthUnits[to];

    document.getElementById("result").innerText =
        `${value} ${from} = ${result.toFixed(5)} ${to}`;
}
const weightUnits = {
    kg: 1,
    g: 1000,
    lb: 2.20462,
    ton: 0.001
};

function convertWeight() {

    const value = parseFloat(document.getElementById("weightInput").value);
    const from = document.getElementById("weightFrom").value;
    const to = document.getElementById("weightTo").value;

    if (isNaN(value)) {
        document.getElementById("weightResult").innerText = "Enter a valid number.";
        return;
    }

    const valueInKg = value / weightUnits[from];
    const result = valueInKg * weightUnits[to];

    document.getElementById("weightResult").innerText =
        `${value} ${from} = ${result.toFixed(5)} ${to}`;
}
function convertTemperature() {

    const value = parseFloat(document.getElementById("tempInput").value);
    const from = document.getElementById("tempFrom").value;
    const to = document.getElementById("tempTo").value;

    if (isNaN(value)) {
        document.getElementById("tempResult").innerText = "Enter a valid number.";
        return;
    }

    let valueInCelsius;

    // Convert to Celsius first
    if (from === "C") valueInCelsius = value;
    if (from === "F") valueInCelsius = (value - 32) * 5/9;
    if (from === "K") valueInCelsius = value - 273.15;

    let result;

    // Convert from Celsius to target
    if (to === "C") result = valueInCelsius;
    if (to === "F") result = (valueInCelsius * 9/5) + 32;
    if (to === "K") result = valueInCelsius + 273.15;

    document.getElementById("tempResult").innerText =
        `${value} °${from} = ${result.toFixed(2)} °${to}`;
}
const areaUnits = {
    sqm: 1,
    sqft: 10.7639,
    acre: 0.000247105,
    hectare: 0.0001
};

function convertArea() {

    const value = parseFloat(document.getElementById("areaInput").value);
    const from = document.getElementById("areaFrom").value;
    const to = document.getElementById("areaTo").value;

    if (isNaN(value)) {
        document.getElementById("areaResult").innerText = "Enter a valid number.";
        return;
    }

    const valueInSqm = value / areaUnits[from];
    const result = valueInSqm * areaUnits[to];

    document.getElementById("areaResult").innerText =
        `${value} ${from} = ${result.toFixed(5)} ${to}`;
}
const volumeUnits = {
    liter: 1,
    ml: 1000,
    m3: 0.001,
    gallon: 0.264172
};

function convertVolume() {

    const value = parseFloat(document.getElementById("volumeInput").value);
    const from = document.getElementById("volumeFrom").value;
    const to = document.getElementById("volumeTo").value;

    if (isNaN(value)) {
        document.getElementById("volumeResult").innerText = "Enter a valid number.";
        return;
    }

    const valueInLiter = value / volumeUnits[from];
    const result = valueInLiter * volumeUnits[to];

    document.getElementById("volumeResult").innerText =
        `${value} ${from} = ${result.toFixed(5)} ${to}`;
}
const densityUnits = {
    kgm3: 1,
    gcm3: 0.001,
    lbft3: 0.062428
};

function convertDensity() {

    const value = parseFloat(document.getElementById("densityInput").value);
    const from = document.getElementById("densityFrom").value;
    const to = document.getElementById("densityTo").value;

    if (isNaN(value)) {
        document.getElementById("densityResult").innerText = "Enter a valid number.";
        return;
    }

    const valueInKgM3 = value / densityUnits[from];
    const result = valueInKgM3 * densityUnits[to];

    document.getElementById("densityResult").innerText =
        `${value} ${from} = ${result.toFixed(5)} ${to}`;
}
const pressureUnits = {
    pa: 1,
    bar: 0.00001,
    psi: 0.000145038,
    atm: 0.00000986923
};

function convertPressure() {

    const value = parseFloat(document.getElementById("pressureInput").value);
    const from = document.getElementById("pressureFrom").value;
    const to = document.getElementById("pressureTo").value;

    if (isNaN(value)) {
        document.getElementById("pressureResult").innerText = "Enter a valid number.";
        return;
    }

    const valueInPa = value / pressureUnits[from];
    const result = valueInPa * pressureUnits[to];

    document.getElementById("pressureResult").innerText =
        `${value} ${from} = ${result.toFixed(5)} ${to}`;
}
const speedUnits = {
    ms: 1,
    kmh: 3.6,
    mph: 2.23694
};

function convertSpeed() {

    const value = parseFloat(document.getElementById("speedInput").value);
    const from = document.getElementById("speedFrom").value;
    const to = document.getElementById("speedTo").value;

    if (isNaN(value)) {
        document.getElementById("speedResult").innerText = "Enter a valid number.";
        return;
    }

    const valueInMs = value / speedUnits[from];
    const result = valueInMs * speedUnits[to];

    document.getElementById("speedResult").innerText =
        `${value} ${from} = ${result.toFixed(5)} ${to}`;
}
