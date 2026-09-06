<?php
require_once __DIR__ . '/Upgrade.php';
require_once __DIR__ . '/utils/createUpgrade.php';

$openFile = fopen(__DIR__ . '/../upgrades.csv', 'r');
$headers = fgetcsv($openFile, null, ';');

$upgrades = [];

while (($ligne = fgetcsv($openFile, null, ';')) !== false) {
    $upgrades[] = createUpgrade($ligne);
}

fclose($openFile);

// TODO (optionnel) Afficher les valeurs des objets nouvellement crées sur l'interface à la place de l'ancien shop.json