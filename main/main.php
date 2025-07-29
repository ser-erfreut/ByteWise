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
}
