var fs = require('fs');
const mongoose = require('mongoose');
const TestResult = require('../../../models/testresults');

mongoose.connect('mongodb+srv://mtaas:mtaas@cluster0-jzndm.mongodb.net/test?retryWrites=true&w=majority');


exports.createFile = function(project_id, tester_id, test_id, name){
    var suffix = makeid(5);
    var content = 'PROJECT ID: '+project_id+'  |  '+'TESTER ID: '+tester_id+'  |  '+'TEST ID: '+test_id;
    fs.appendFile('log_files/'+name + suffix+'.txt', content, function (err) {
        if (err) throw err;
        console.log('Saved');
    });

    const testEntry = new TestResult({
        _id: mongoose.Types.ObjectId(),
        project_id: project_id,
        tester_id: tester_id,
        file_name: name,
        test_id: test_id,
        log_file_name: name,
        log_file_loc: 'http://localhost:3001/'+name+suffix+'.txt'
    })
    // var res = false;
    testEntry.save().then(result=>{
        // res = true;
        console.log(result);
		console.log("IN FILE");
    }).catch(err=>{
        console.log(err);
    })

    return name+suffix;
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 

