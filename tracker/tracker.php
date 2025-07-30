<?php
require_once '../DB.php';
require_once '../main/main.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $data = json_decode(file_get_contents('php://input'), true);

    try {
        $strSql = 'INSERT INTO ip_tracking (protokoll, weiterleitung, created_at) VALUES ( :protokoll, :weiterleitung, :created_at)';
        $arrWerte = [
            'protokoll' => $data['protokoll'],
            'weiterleitung' => $data['weiterleitung'],
            'created_at' => date('Y-m-d H:i:s')
        ];
        Main::setValueSql($strSql, $arrWerte);

        $strSql = 'SELECT LASTVAL();';
        $lastId = Main::getValueSql($strSql, []);
        Main::sendJsonResponse(['success' => $lastId[0]]);
    } catch (PDOException|Exception $e) {
        Main::sendJsonResponse(['error' => $e->getMessage()], 400);
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'GET'){
    try {
        $id = Main::getParameter('id');

        $strSql = 'SELECT stadt, land, internet_anbieter, created_at FROM ip_adressen WHERE tracked_id = :tracking_id';
        $arrWerte = [
            'tracking_id' => $id,
        ];
        $result = Main::getValueSql($strSql, $arrWerte);
        Main::sendJsonResponse(['success' => true,
            'data' => $result]);
    } catch (PDOException|Exception $e) {
        Main::sendJsonResponse(['error' => $e->getMessage()], 400);
    }
}