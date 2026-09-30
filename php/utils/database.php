<?php
require_once __DIR__ . '/loadEnv.php';

loadEnv(__DIR__ . '/../../.env');

$pdo = new PDO(
    'mysql:host=' . getenv('DB_HOST') . ';dbname=' . getenv('MYSQL_DATABASE') . ';charset=utf8mb4',
    getenv('MYSQL_USER'),
    getenv('MYSQL_PASSWORD')
);