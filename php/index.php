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

header('Content-Type: application/json; charset=utf-8');
echo json_encode($upgrades, JSON_UNESCAPED_UNICODE);

// TODO (optionnel) Afficher les valeurs des objets nouvellement crées sur l'interface à la place de l'ancien shop.json