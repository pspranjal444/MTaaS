var fs = require('fs')


exports.store = function(fileName, testName, testResult) {
    // console.log('IN DB ', ans);
    var d = new Date();
    var n = d.getTime();
    var res = 'FAILED';
    if(testResult){
        res = 'PASSED';
    }
    var content = '\nTEST: '+testName+'   '+res+'  '+n;
    console.log(fileName);
    fs.appendFile('log_files/'+fileName+'.txt', content, function (err) {
        //if (err) throw err;
        console.log('IN DATABASE');
    });
	
}

