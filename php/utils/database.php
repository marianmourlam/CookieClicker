<?php

$pdo = new PDO(
    'mysql:host=db' . ';dbname=' . getenv('MYSQL_DATABASE') . ';charset=utf8mb4',
    getenv('MYSQL_USER'),
    getenv('MYSQL_ROOT_PASSWORD')
);

$sqlQuery = 'INSERT INTO upgrades(id, name, description, base_cost, cps, icon) VALUES (:id, :name, :description, :base_cost, :cps, :icon)';

$insertUpgrades = $pdo->prepare($sqlQuery);
$insertUpgrades->execute([

]);