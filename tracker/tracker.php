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