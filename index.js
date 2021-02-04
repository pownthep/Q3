const fetch = require("node-fetch");
const HTMLParser = require("node-html-parser");

const opts = {
  headers: {
    cookie: "hasCookie=true",
  },
};

(async () => {
  const res = await fetch("https://codequiz.azurewebsites.net/", opts);
  const text = await res.text();
  const root = HTMLParser.parse(text);
  const array = root.querySelectorAll("td");
  for (let [index, el] of array.entries()) {
    if (el.text.includes(process.argv[2])) {
      console.log(array[index + 1].text);
    }
  }
})();
