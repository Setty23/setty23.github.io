function calculateMassBalance() {
    // Get input values from the user
    var totalMassIn = parseFloat(prompt("Enter the total mass in:"));
    var totalMassOut = parseFloat(prompt("Enter the total mass out:"));
    var accumulation = parseFloat(prompt("Enter the accumulation:"));

    // Check if input values are valid numbers
    if (!isNaN(totalMassIn) && !isNaN(totalMassOut) && !isNaN(accumulation)) {
        // Calculate mass balance
        var massBalance = totalMassIn - totalMassOut - accumulation;

        // Display the result
        alert("Mass balance: " + massBalance);
    } else {
        // If input values are not valid numbers, display an error message
        alert("Please enter valid numbers for total mass in, total mass out, and accumulation.");
    }
}
