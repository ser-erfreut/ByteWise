<?php
class Main
{
    public static function sendJsonResponse($data, $statusCode = 200) {
        if (isset($data['error'])){
            $statusCode = 400;
        }
        http_response_code($statusCode);
        echo json_encode($data);
        exit;
    }

    public static function getValueSql($strSql, $arrExecute): array
    {
        $db = DB::getInstance();
        $conn = $db->getConnection();

        try {
            $stmt = $conn->prepare($strSql);
            $stmt->execute($arrExecute);
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

            return $result;
        } catch (PDOException $e) {
            error_log("Datenbankfehler: " . $e->getMessage());
            throw new Exception("Datenbankfehler beim Ausführen der Abfrage");
        }
    }

    public static function setValueSql($strSql, $arrExecute)
    {
        $db = DB::getInstance();
        $conn = $db->getConnection();

        try {
            $stmt = $conn->prepare($strSql);
            $stmt->execute($arrExecute);

        } catch (PDOException $e) {
            error_log("Datenbankfehler: " . $e->getMessage());
            throw new Exception("Datenbankfehler beim Ausführen der Abfrage");
        }
    }
}
