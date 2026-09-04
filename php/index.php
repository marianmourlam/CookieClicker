<?php
require_once __DIR__ . '/Upgrade.php';
function createUpgrade(array $ligne): Upgrade
{
    return new Upgrade(
        (int)$ligne[0], $ligne[1], (int)$ligne[3], (float)$ligne[4], $ligne[5], $ligne[2]
    );
}

$openFile = fopen(__DIR__ . '/../upgrades.csv', 'r');
$headers = fgetcsv($openFile, null, ';');

$upgrades = [];

while (($ligne = fgetcsv($openFile, null, ';')) !== false) {
    $upgrades[] = createUpgrade($ligne);
}

fclose($openFile);

// TODO Extraire la première ligne (en-têtes) pour ne pas la stocker en tant qu'objet

// TODO Stocker les autres lignes sous forme d'objet (en instanciant un objet Upgrade) + BONUS : crée une fonction (createUpgrade() pour la création d'un objet Upgrade)

// TODO (optionnel) Afficher les valeurs des objets nouvellement crées sur l'interface à la place de l'ancien shop.json