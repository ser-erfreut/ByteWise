<?php
require_once '../DB.php';
require_once '../main/main.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    try {
        $db = DB::getInstance();
        $pdo = $db->getConnection();

        $stmt = $pdo->prepare("
        SELECT 
            land,
            COUNT(*) as anzahl,
            STRING_AGG(DISTINCT stadt, ', ') as staedte
        FROM ip_adressen 
        WHERE land IS NOT NULL
        GROUP BY land 
        ORDER BY anzahl DESC
        ");
        $stmt->execute([]);

        $laenderStatistik = $stmt->fetchAll(PDO::FETCH_ASSOC);

        $stmt = $pdo->prepare("
        SELECT 
            stadt,
            COUNT(*) as anzahl
        FROM ip_adressen 
        WHERE stadt IS NOT NULL 
        GROUP BY stadt 
        ORDER BY anzahl DESC 
        LIMIT 10
        ");


        $stmt->execute([]);
        $staedteStatistik = $stmt->fetchAll(PDO::FETCH_ASSOC);

        Main::sendJsonResponse([
            'success' => true,
            'laender' => $laenderStatistik,
            'staedte' => $staedteStatistik
        ]);

    } catch(PDOException $e) {
        Main::sendJsonResponse(['error' => $e->getMessage()], 400);
    }

}