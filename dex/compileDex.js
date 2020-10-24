"use strict";

const fs = require("fs");

const nationalDex = require("./nationalDex.json");
const galarDex = require("./galarDex.json");

// national dex: key - name, value - id
let nameDex = {};
Object.keys(nationalDex).forEach((key) => {
  return (nameDex[nationalDex[key]] = key);
});

// console.log(nationalDex[nameDex["Slowbro"]]);
// console.log(nameDex[galarDex["002"]]);

// galar dex
// national dex num: nameDex[galarDex["002"]]
let result = {};
Object.keys(galarDex).forEach((galarId) => {
  return (result[galarId] = {
    nationalId: nameDex[galarDex[galarId]],
    name: galarDex[galarId],
  });
});
let data = JSON.stringify(result);
fs.writeFileSync("./result.json", data);

// national dex
// let result = {};
// Object.keys(nationalDex).forEach((key) => {
//   return (result[key] = { nationalId: key, name: nationalDex[key] });
// });
// let data = JSON.stringify(result);
// fs.writeFileSync("./result.json", data);
