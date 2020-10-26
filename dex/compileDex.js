"use strict";

const fs = require("fs");

const nationalDexData = require("./nationalDex.json");
const galarDexData = require("./galarDex.json");
// const isleOfArmorDexData = require("./galarIsleOfArmorDex.json");
const crownTundraDexData = require("./galarCrownTundra.json");

// national dex: key - name, value - id
let nameDex = {};
Object.keys(nationalDexData).forEach((key) => {
  return (nameDex[nationalDexData[key]] = key);
});

// console.log(nationalDexData[nameDex["Slowbro"]]);
// console.log(nameDex[galarDex["002"]]);

// galar dex
// national dex num: nameDex[galarDex["002"]]
let galarDex = {};
Object.keys(galarDexData).forEach((galarId) => {
  return (galarDex[galarId] = {
    nationalId: nameDex[galarDexData[galarId]],
    name: galarDexData[galarId],
  });
});
// let data = JSON.stringify(galarDex);
// console.log(data);
// fs.writeFileSync("./result.json", data);

// galar isle of armor dex
// let isleDex = {};
// Object.keys(isleOfArmorDexData)
//   .filter(
//     (isleId) =>
//       !Object.values(galarDexData).includes(isleOfArmorDexData[isleId])
//   )
//   .sort((a, b) => (a.nationalId > b.nationalId ? 1 : -1))
//   .forEach((isleId) => {
//     return (isleDex[isleId] = {
//       nationalId: nameDex[isleOfArmorDexData[isleId]],
//       name: isleOfArmorDexData[isleId],
//     });
//   });

// let ordered = {};
// let counter = 0;
// Object.keys(isleDex)
//   //.sort((a, b) => (a.nationalId > b.nationalId ? 1 : -1))
//   .sort()
//   .forEach((isleId) => {
//     counter++;
//     ordered[counter.toString().padStart(3, "0")] = {
//       nationalId: nameDex[isleOfArmorDexData[isleId]],
//       name: isleOfArmorDexData[isleId],
//     };
//   });

// let data = JSON.stringify(ordered);
// fs.writeFileSync("./result.json", data);

// galar crown tundra dex
let crownDex = {};
Object.keys(crownTundraDexData)
  .filter(
    (crownId) =>
      !Object.values(galarDexData).includes(crownTundraDexData[crownId])
  )
  .forEach((crownId) => {
    return (crownDex[crownId] = {
      nationalId: nameDex[crownTundraDexData[crownId]],
      name: crownTundraDexData[crownId],
    });
  });

let ordered = {};
let counter = 0;
Object.keys(crownDex)
  //.sort((a, b) => (a.nationalId > b.nationalId ? 1 : -1))
  .sort()
  .forEach((crownId) => {
    counter++;
    ordered[counter.toString().padStart(3, "0")] = {
      nationalId: nameDex[crownTundraDexData[crownId]],
      name: crownTundraDexData[crownId],
    };
  });

let data = JSON.stringify(ordered);
fs.writeFileSync("./result.json", data);

// national dex
// let result = {};
// Object.keys(nationalDexData).forEach((key) => {
//   return (result[key] = { nationalId: key, name: nationalDexData[key] });
// });
// let data = JSON.stringify(result);
// fs.writeFileSync("./result.json", data);
