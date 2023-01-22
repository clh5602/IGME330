"use strict";

const words1 = ["Acute", "Aft", "Anti-matter", "Bipolar", "Cargo", "Command", "Communication", "Computer", "Deuterium", "Dorsal", "Emergency", "Engineering", "Environmental", "Flight", "Fore", "Guidance", "Heat", "Impulse", "Increased", "Inertial", "Infinite", "Ionizing", "Isolinear", "Lateral", "Linear", "Matter", "Medical", "Navigational", "Optical", "Optimal", "Optional", "Personal", "Personnel", "Phased", "Reduced", "Science", "Ship's", "Shuttlecraft", "Structural", "Subspace", "Transporter", "Ventral"];

const words2 = ["Propulsion", "Dissipation", "Sensor", "Improbability", "Buffer", "Graviton", "Replicator", "Matter", "Anti-matter", "Organic", "Power", "Silicon", "Holographic", "Transient", "Integrity", "Plasma", "Fusion", "Control", "Access", "Auto", "Destruct", "Isolinear", "Transwarp", "Energy", "Medical", "Environmental", "Coil", "Impulse", "Warp", "Phaser", "Operating", "Photon", "Deflector", "Integrity", "Control", "Bridge", "Dampening", "Display", "Beam", "Quantum", "Baseline", "Input"];

const words3 = ["Chamber", "Interface", "Coil", "Polymer", "Biosphere", "Platform", "Thruster", "Deflector", "Replicator", "Tricorder", "Operation", "Array", "Matrix", "Grid", "Sensor", "Mode", "Panel", "Storage", "Conduit", "Pod", "Hatch", "Regulator", "Display", "Inverter", "Spectrum", "Generator", "Cloud", "Field", "Terminal", "Module", "Procedure", "System", "Diagnostic", "Device", "Beam", "Probe", "Bank", "Tie-In", "Facility", "Bay", "Indicator", "Cell"];

console.log(words1[0]);

// Function used to get a random value from an array parameter
function getRandomVal(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

// Returns a string made by grabbing random values from the array parameters
function buildTechnoBabble(arr1, arr2, arr3) {
    return `${getRandomVal(arr1)} ${getRandomVal(arr2)} ${getRandomVal(arr3)}`
};

// Assigned to the button. Sets innerHTML of the <p> to the results of buildTechnoBabble
function showMeTechnoBabble() {
    const targetP = document.querySelector('#output');
    targetP.innerHTML = buildTechnoBabble(words1, words2, words3);
};

// Get the button and give it the correct function
window.onload = (e) => {
    const targetButton = document.querySelector('#myButton');
    targetButton.addEventListener('click', showMeTechnoBabble);
    showMeTechnoBabble();
};