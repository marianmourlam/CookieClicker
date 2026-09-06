<?php

class Upgrade
{
    public int $id;
    public string $name;
    public ?string $description = null;
    public int $baseCost;
    public float $cps;
    public string $icon;

    public function __construct(int $id, string $name, int $baseCost, float $cps, string $icon = "ri-cookie-line", ?string $description = null)
    {
        $this->id = $id;
        $this->name = $name;
        $this->baseCost = $baseCost;
        $this->cps = $cps;
        $this->icon = $icon;
        $this->description = $description;
    }

}

