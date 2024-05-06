<?php


// MySQL database configuration
$servername = "328963-web-01";
$username = "ubuntu";
$password = "root";
$dbname = "chemical_property";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get search query from form
$search = $_GET['search'];

// SQL query to search for chemical properties
$sql = "SELECT * FROM chemical_properties WHERE Symbol LIKE '%$search%'";

// Execute the query
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        echo "AtomicNumber: " . $row["AtomicNumber"]. " - Element: " . $row["Element"]. " - Symbol: " . $row["Symbol"]. "<br>";
    }
} else {
    echo "0 results";
}

// Close connection
$conn->close();
?>
