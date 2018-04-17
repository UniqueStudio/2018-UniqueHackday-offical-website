const { execSync } = require("child_process");
const fs = require("fs");
const cheerio = require("cheerio");

const as = {
  js: "script",
  css: "style",
  png: "image",
  jpeg: "image",
  svg: "image"
};

const preloads = execSync("curl https://console.hack.hustunique.com/filelist")
  .toString()
  .split("\n")
  .reverse()
  .slice(1)
  .filter(
    filename =>
      !!filename &&
      filename.indexOf(".html") < 0 &&
      filename.indexOf(".map") < 0
  )
  .map(
    filename =>
      `<link rel="preload" href="https://console.hack.hustunique.com/${filename}" as="${
        as[filename.split(".").reverse()[0]]
      }">`
  )
  .join("\n");
const html = fs.readFileSync("./dist/index.html").toString();
const $ = cheerio.load(html);
$("head").append(preloads);
fs.writeFileSync("./dist/index.html", $.html());
