<?php
require_once '../DB.php';
require_once '../main/main.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    try {

        $strSQL = "
        SELECT 
            land,
            COUNT(*) as anzahl,
            STRING_AGG(DISTINCT stadt, ', ') as staedte,
            STRING_AGG(DISTINCT internet_anbieter, ', ') as internet_anbieter
        FROM ip_adressen 
        WHERE land IS NOT NULL
        GROUP BY land 
        ORDER BY anzahl DESC
        ";
        $laenderStatistik = Main::getValueSql($strSQL, []);


        $strSQL ="
        SELECT 
            stadt,
            COUNT(*) as anzahl
        FROM ip_adressen 
        WHERE stadt IS NOT NULL 
        GROUP BY stadt 
        ORDER BY anzahl DESC 
        LIMIT 10
        ";

        $staedteStatistik = Main::getValueSql($strSQL, []);

        Main::sendJsonResponse([
            'success' => true,
            'laender' => $laenderStatistik,
            'staedte' => $staedteStatistik
        ]);

    } catch(PDOException|Exception $e) {
        Main::sendJsonResponse(['error' => $e->getMessage()], 400);
    }
}