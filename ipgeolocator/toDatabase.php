<?php
require_once '../DB.php';
require_once '../main/main.php';


if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $data = json_decode(file_get_contents('php://input'), true);

    try {
        $strSql = "INSERT INTO ip_adressen (ip_adresse, stadt, region, land, internet_anbieter, created_at) 
        VALUES (:ip_adresse, :stadt, :region, :land, :internet_anbieter, :created_at)";
        $arrWerte = [
            'ip_adresse' => $data['ip'],
            'stadt' => $data['stadt'],
            'region' => $data['region'],
            'land' => $data['land'],
            'internet_anbieter' => $data['internet_anbieter'],
            'created_at' => date('Y-m-d H:i:s')
        ];

        Main::setValueSql($strSql, $arrWerte);
        Main::sendJsonResponse(['success' => 'Die Daten wurden erfolgreich gespeichert.']);

    } catch (PDOException|Exception $e) {
        Main::sendJsonResponse(['error' => $e->getMessage()], 400);
    }
}


