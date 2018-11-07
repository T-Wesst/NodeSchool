// create a module containing dir reading func and filter func
// define single export func
let fs = require('fs'),
    path = require('path');

module.exports = function(dirName, fileExt, callback) {
    fs.readdir(dirName, function(err, list) {
        if(err) return callback(err); // early return
        list = list.filter(function(file) {
            return path.extname(file) === '.' + fileExt;
        })
        callback(null, list)
    })
}
