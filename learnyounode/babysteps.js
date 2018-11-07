let sum = 0;

for (let i = 2; i < process.argv.length; i++) {
  sum += Number(process.argv[i]);
}

// process.argv.slice(2).forEach(function(item) {
//     sum += Number(item);
// })

console.log(sum);
