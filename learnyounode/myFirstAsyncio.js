// use fs.readFile()
// collect value from callback func passed as 2nd arg
// if !err have buffer obj as 2nd arg

let fs = require('fs');
fs.readFile(process.argv[2], function(err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log(data.toString().split('\n').length - 1); 
    }
})
