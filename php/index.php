<?php
require_once __DIR__ . '/class/Upgrade.php';
require_once __DIR__ . '/utils/createUpgrade.php';

$openFile = fopen(__DIR__ . '/../upgrades.csv', 'r');
$headers = fgetcsv($openFile, null, ';');

$upgrades = [];

while (($ligne = fgetcsv($openFile, null, ';')) !== false) {
    $upgrades[] = createUpgrade($ligne);
}

fclose($openFile);

// Prépare la requête (ouvrir F12 et aller dans Network et regarder la requête index.php
header('Access-Control-Allow-Origin: https://marianmourlam.github.io');
header('Content-Type: application/json; charset=utf-8');
echo json_encode($upgrades, JSON_UNESCAPED_UNICODE);

$pdo = new PDO(
    'mysql:host=' . getenv('MYSQL_HOST') . ';port=' . getenv('MYSQL_PORT') . ';dbname=' . getenv('MYSQL_DATABASE') . ';charset=utf8mb4',
    getenv('MYSQL_USER'),
    getenv('MYSQL_PASSWORD')
);

$sqlQuery = 'INSERT INTO upgrades(id, name, description, base_cost, cps, icon) VALUES (:id, :name, :description, :baseCost, :cps, :icon)';

foreach ($upgrades as $upgrade) {
    $insertUpgrades = $pdo->prepare($sqlQuery);
    $insertUpgrades->execute([
        'id' => $upgrade->id,
        'name' => $upgrade->name,
        'description' => $upgrade->description,
        'baseCost' => $upgrade->baseCost,
        'cps' => $upgrade->cps,
        'icon' => $upgrade->icon
    ]);
}
