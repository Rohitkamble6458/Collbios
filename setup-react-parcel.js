const fs = require("fs");
const path = require("path");

// Create src directory
if (!fs.existsSync("src")) {
  fs.mkdirSync("src");
}

// Create index.html
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React App with Parcel</title>
</head>
<body>
  <div id="root"></div>
  <script src="index.js"></script>
</body>
</html>
`;

fs.writeFileSync(path.join("src", "index.html"), htmlContent.trim());

// Create index.js
const jsContent = `
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <h1>Hello, Parcel with React!</h1>;
};

ReactDOM.render(<App />, document.getElementById("root"));
`;

fs.writeFileSync(path.join("src", "index.js"), jsContent.trim());

// Update package.json with scripts
if (fs.existsSync("package.json")) {
  const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
  packageJson.scripts = {
    start: "parcel src/index.html",
    build: "parcel build src/index.html",
  };
  fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2));
} else {
  console.log("Error: package.json not found. Run `npm init -y` first.");
}

console.log("React app with Parcel has been set up!");
