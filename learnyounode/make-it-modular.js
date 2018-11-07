let myModule = require("./myModule"),
  dirName = process.argv[2],
  fileExt = process.argv[3];

myModule(dirName, fileExt, function(err, list) {
  if (err) return console.error("Error: ", err);
  list.forEach(function(file) {
    console.log(file);
  });
});
