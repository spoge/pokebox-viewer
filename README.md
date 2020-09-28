# pokemon-box-calculator

A simple app to show where you should put your Pokémon if you want to have them all perfectly sorted.

## Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

### `npm run deploy`

Builds the app for production from the local `develop` branch, then deploys the bundled code to the remote `master` branch of this repository.<br />
This will make the changes visible on the website.

## Build pokemon json

let data = [...document.getElementsByTagName("tr")].filter(tr => tr.textContent.includes("#"))

let sb = "{";
data.forEach(tr => {
let pokemonData = tr.textContent.split("\n");
sb += `"${pokemonData[2].trim().substring(1)}": "${pokemonData[7].trim()}",`;
})
sb += "}";
console.log(sb);
