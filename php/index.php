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
header('Content-Type: application/json; charset=utf-8');
echo json_encode($upgrades, JSON_UNESCAPED_UNICODE);