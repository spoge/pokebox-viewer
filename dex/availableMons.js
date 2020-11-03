"use strict";

const fs = require("fs");

const nationalDexData = require("./nationalDex.json");

// galar
const galarDexData = require("./galarDex.json");
const isleOfArmorDexData = require("./galarIsleOfArmorDex.json");
const crownTundraDexData = require("./galarCrownTundra.json");

const alolaDexData = require("./alola1Dex.json");
const alola2DexData = require("./alola2Dex.json");

const orasDexData = require("./orasDex.json");

const kalosCentralDexData = require("./kalosCentralDex.json");
const kalosCoastalDexData = require("./kalosCoastalDex.json");
const kalosMountainDexData = require("./kalosMountainDex.json");

const unova1DexData = require("./unova1Dex.json");
const unova2DexData = require("./unova2Dex.json");

// national dex: key - name, value - id
let nameDex = {};
Object.keys(nationalDexData).forEach((key) => {
  return (nameDex[nationalDexData[key]] = key);
});

let availableMons = new Set();

const addToSet = (mons, dex) => {
  Object.keys(dex).forEach((id) => mons.add(nameDex[dex[id]]));
  return mons;
};

const reverseSet = (set, maxNum) => {
  let allMons = new Set();
  for (let i = 1; i <= maxNum; i++) {
    allMons.add(i.toString().padStart(3, "0"));
  }
  [...set].forEach((id) => allMons.delete(id));
  return allMons;
};

// add dexes
availableMons = addToSet(availableMons, galarDexData);
availableMons = addToSet(availableMons, isleOfArmorDexData);
availableMons = addToSet(availableMons, crownTundraDexData);
availableMons = addToSet(availableMons, alolaDexData);
// availableMons = addToSet(availableMons, alola2DexData);
availableMons = addToSet(availableMons, orasDexData);
availableMons = addToSet(availableMons, kalosCentralDexData);
availableMons = addToSet(availableMons, kalosCoastalDexData);
availableMons = addToSet(availableMons, kalosMountainDexData);
availableMons = addToSet(availableMons, unova1DexData);
availableMons = addToSet(availableMons, unova2DexData);

console.log([...reverseSet(availableMons, 893)].sort());
console.log([...reverseSet(availableMons, 893)].length);
