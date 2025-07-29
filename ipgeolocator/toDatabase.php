<?php
require_once '../DB.php';
require_once '../main/main.php';


if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $data = json_decode(file_get_contents('php://input'), true);

    try {
        $db = DB::getInstance();
        $pdo = $db->getConnection();

        $stmt = $pdo->prepare("INSERT INTO ip_adressen (ip_adresse, stadt, region, land, internet_anbieter, created_at) 
        VALUES (:ip_adresse, :stadt, :region, :land, :internet_anbieter, :created_at)");
        $arrWerte = [
            'ip_adresse' => $data['ip'],
            'stadt' => $data['stadt'],
            'region' => $data['region'],
            'land' => $data['land'],
            'internet_anbieter' => $data['internet_anbieter'],
            'created_at' => date('Y-m-d H:i:s')
        ];

        $stmt->execute($arrWerte);
        $stmt->fetchAll(PDO::FETCH_ASSOC);
        Main::sendJsonResponse(['success' => 'Die Daten wurden erfolgreich gespeichert.']);

    } catch (PDOException $e) {
        Main::sendJsonResponse(['error' => $e->getMessage()], 400);
    }
}

if($_SERVER['REQUEST_METHOD'] == 'GET'){
    $db = DB::getInstance();
    $pdo = $db->getConnection();

    $stmt = $pdo->prepare("SELECT * FROM ip_adressen");
    $arrReturn = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($arrReturn);
    exit;
}


