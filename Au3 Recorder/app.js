var exec = require('child_process').exec;
var child = exec('java -jar au3R.jar',
  function (error, stdout, stderr){
    console.log('Output -> ' + stdout);
    if(error !== null){
      console.log("Error -> "+error);
    }
});
 
module.exports = child;