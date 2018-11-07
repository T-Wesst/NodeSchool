// use fs.readFile()
// collect value from callback func passed as 2nd arg
// if !err have buffer obj as 2nd arg

let fs = require("fs"),
  file = process.argv[2];
fs.readFile(file, function(err, content) {
  if (err) return console.log(err);
  let lines = content.toString().split("\n").length - 1;
  console.log(lines);
});
