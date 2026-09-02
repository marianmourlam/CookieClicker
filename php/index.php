<?php


$openFile = fopen(__DIR__ . '/../upgrades.csv', "r");
$response = fgetcsv($openFile);

// TODO Extraire la première ligne (en-têtes) pour ne pas la stocker en tant qu'objet

// TODO Stocker les autres lignes sous forme d'objet (en instanciant un objet Upgrade)

// TODO (optionnel) Afficher les valeurs des objets nouvellement crées sur l'interface à la place de l'ancien shop.json