<?php
function createUpgrade(array $ligne): Upgrade
{
    return new Upgrade((int)$ligne[0], $ligne[1], (int)$ligne[3], (float)$ligne[4], $ligne[5], $ligne[2]);
}