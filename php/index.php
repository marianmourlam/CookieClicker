<?php


$openFile = fopen(__DIR__ . '/../upgrades.csv', "r");
$entetes = fgetcsv($openFile, null, ';');

while (($ligne = fgetcsv($openFile, null, ';')) !== false) {

    var_dump($ligne);
}
$upgrade = new Upgrade($ligne[0],$ligne[1], $ligne[3], $ligne[4], $ligne[5], $ligne[2], );

// TODO Extraire la première ligne (en-têtes) pour ne pas la stocker en tant qu'objet

// TODO Stocker les autres lignes sous forme d'objet (en instanciant un objet Upgrade) + BONUS : crée une fonction (createUpgrade() pour la création d'un objet Upgrade)

// TODO (optionnel) Afficher les valeurs des objets nouvellement crées sur l'interface à la place de l'ancien shop.json