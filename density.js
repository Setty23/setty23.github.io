function calculateDensity() {
    // Get mass and volume values from input fields
    var mass = parseFloat(document.getElementById('mass').value);
    var volume = parseFloat(document.getElementById('volume').value);

    // Check if mass and volume are valid numbers
    if (!isNaN(mass) && !isNaN(volume) && volume !== 0) {
        // Calculate density
        var density = mass / volume;

        // Display the result
        document.getElementById('result').innerHTML = 'Density: ' + density.toFixed(2) + ' g/cm<sup>3</sup>';
    } else {
        // If mass or volume is not a valid number or volume is 0, display an error message
        document.getElementById('result').innerHTML = 'Please enter valid numbers for mass and volume.';
    }
}

