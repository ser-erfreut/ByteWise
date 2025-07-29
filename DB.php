<?php

class DB {
    private static $instance = null;
    private $pdo;

    private function __construct() {
        $host = 'db.iqzivfoqfmfkonzgrkfh.supabase.co';
        $port = '5432';
        $dbname = 'postgres';
        $user = 'postgres';
        $password = 'Test1234!';

        try {
            $this->pdo = new PDO(
                "pgsql:host=$host;port=$port;dbname=$dbname",
                $user,
                $password,
                [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
            );
        } catch(PDOException $e) {
            die("Verbindungsfehler: " . $e->getMessage());
        }
    }

    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    public function getConnection() {
        return $this->pdo;
    }
}