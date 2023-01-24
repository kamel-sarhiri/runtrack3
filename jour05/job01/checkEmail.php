<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "utilisateurs";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
// htmlspecialchar pour éviter les injections
$email = htmlspecialchars($_POST['email']);

// selectionner les infos dans la table utilisateurs
$sql = "SELECT * FROM utilisateurs WHERE email = :email";
$select = $conn->prepare($sql);
$select->execute(array(
    ':email' => $email,
));
$result = $select->fetchAll();


if (count($result) !== 0) { // si le tableau n'est pas vide alors l'email existe déjà
    echo '0';
} else {
    echo true;
}

// fermeture connexion
$conn = null;