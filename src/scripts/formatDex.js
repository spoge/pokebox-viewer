const NationalDex = require("../dex/NationalDex.json");
const SinnohDex = require("../dex/SinnohDex.json");

const findNationalId = (name) => {
  const matches = Object.entries(NationalDex)
    .filter((dexEntry) => dexEntry[1]["name"].trim() === name.trim())
    .map((dexEntry) => dexEntry[0]);
  return matches.length === 1 ? matches[0] : "invalid";
};

const main = () => {
  Object.entries(SinnohDex).forEach((dexEntry) => {
    SinnohDex[dexEntry[0]] = {
      nationalId: findNationalId(dexEntry[1]),
      name: dexEntry[1],
    };
  });
  console.log(JSON.stringify(SinnohDex));
};

main();

// node src/scripts/formatDex.js
