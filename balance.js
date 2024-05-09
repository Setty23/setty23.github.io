document.getElementById('calculateBtn').addEventListener('click', function() {
    const mass = parseFloat(document.getElementById('massInput').value);
    const energy = parseFloat(document.getElementById('energyInput').value);

    if (isNaN(mass) || isNaN(energy)) {
        document.getElementById('result').textContent = 'Please enter valid numbers.';
        return;
    }

    const result = mass * 9.81;
