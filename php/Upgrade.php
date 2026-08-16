<?php

class Upgrade
{
    public string $name;
    public ?string $description = null;
    public int $baseCost;
    public float $cps;
    public string $icon;

    public function __construct(string $name, int $baseCost, float $cps, string $icon = "ri-cookie-line", ?string $description = null)
    {
        $this->name = $name;
        $this->baseCost = $baseCost;
        $this->cps = $cps;
        $this->icon = $icon;
        $this->description = $description;
    }

}

