const fs = require("fs");

const NationalDex = require("./nationalDex.json");
const LocalDex = require("./localDex.json");

const findNationalId = (name) => {
  const matches = Object.entries(NationalDex)
    .filter((dexEntry) => dexEntry[1]["name"].trim() === name.trim())
    .map((dexEntry) => dexEntry[0]);
  return matches.length === 1 ? matches[0] : "invalid";
};

const main = () => {
  Object.entries(LocalDex).forEach((dexEntry) => {
    LocalDex[dexEntry[0]] = {
      nationalId: findNationalId(dexEntry[1]),
      name: dexEntry[1],
    };
  });
  fs.writeFileSync("dump.json", JSON.stringify(LocalDex));
};

main();

// node src/scripts/formatDex.js
