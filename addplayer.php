<?php
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "Abhiroop@2004";
$dbname = "football_club";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(["success" => false, "error" => "Connection failed: " . $conn->connect_error]);
    exit();
}

$sql = "SELECT name, position FROM players";
$result = $conn->query($sql);

$players = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $players[] = $row;
    }
}

echo json_encode($players);
$conn->close();
?>
