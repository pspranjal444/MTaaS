const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var fileUpload = require('express-fileupload');
var fs = require('fs');
const BugSchema = require('../../models/BugSchema');
const ScriptsSchema = require('../../models/ScriptsSchema');
const mongoose = require('mongoose');
const shelljs = require('shelljs');
const Logs = require('../../models/testresults');
const Device = require('../../models/DeviceSchema');

mongoose.connect('mongodb+srv://mtaas:mtaas@cluster0-jzndm.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());
app.use('/', express.static(__dirname + '/scripts'));
app.use('/', express.static(__dirname + '/log_files'));



app.get('/', (req, res)=>{
    console.log('Reached Server');
})

app.post('/uploadScript', (req, res) => {
    console.log(req);
    let file = req.files.file;
    var filename = req.files.file.name;

    var randomString = "";
    var group = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++){
        randomString += group.charAt(Math.floor(Math.random() * group.length));
    }

    file.mv(
        __dirname + '/scripts/' + randomString + `${filename}`,
        function (err) {
          if (err) throw err;
          console.log('Done');
    })

    fileLoc = 'http://localhost:3001/'+randomString+`${filename}`;

    const {script_name, tester_id, project_id} = req.body;

    const data = new ScriptsSchema({
        _id: new mongoose.Types.ObjectId(),
        script_name: script_name,
        tester_id: tester_id,
        project_id: project_id,
        file_name: filename,
        file_location: fileLoc,
    })

    data.save().then(result=>{
        console.log(result);
        res.send(true);
    }).catch(err=>{
        console.log(err);
    })

})

app.get('/getScripts', (req, res) => {
    const {tester_id} = req.query;

    ScriptsSchema.find({tester_id: tester_id}).exec().then(result=>{
        console.log(result);
        res.json(result);
    }).catch(err=>{
        console.log(err);
    })
})

app.post('/uploadLogs', (req, res) => {

})

app.get('/getLogs', (req, res) => {
    const {tester_id} = req.query;

    Logs.find({tester_id: tester_id}).exec().then(result=>{
        console.log(result);
        res.json(result);
    })
})


app.post('/runScript', (req, res) => {
    const {file_name} = req.body;
    console.log('running');
    var path = 'D:/2ndSem/CMPE281/test-runner-react/src/Server/scripts/' + 'vbO4Sindex.js';
    console.log(path);
    var code = shelljs.exec('node ' + path);
    console.log(code.code);
    if(code.code==0){
        res.send(true);
    }
    else{
        res.send(false);
    }
})

app.post('/deleteScript', (req, res) => {
    const {_id, tester_id, project_id} = req.body;
    var query = {_id: _id, tester_id: tester_id, project_id: project_id}
    ScriptsSchema.remove(query).exec().then(result=>{
        res.json(result);
    })
})

app.post('/deleteLog', (req, res) => {
    const {project_id, test_id, tester_id} = req.body;
    var query = {project_id: project_id, test_id: test_id, tester_id: tester_id};
    Logs.remove(query).exec().then(result=>{
        console.log(result);
        res.send(true);
    }).catch(err=>{
        console.log(err);
    })
})

app.get('/downloadLog', (req, res) => {
    
})

app.post('/createDevice', (req, res) => {
    const {project_id, tester_id, device_name, ram, processor, status} = req.body;
    const data = new Device({
        _id: new mongoose.Types.ObjectId(),
        project_id: project_id,
        tester_id: tester_id,
        device_name: device_name,
        ram: ram,
        processor: processor,
        status: status
    })

    data.save().then(result=>{
        console.log(result);
        res.send(true);
    })
});

app.get('/getDevices', (req, res) => {
    const {tester_id} = req.query;
    Device.find({tester_id: tester_id}).exec().then(result=>{
        res.json(result);
    })
})

app.get('/downloadScript', (req, res) => {
    
})

app.post('/createBug', (req, res) => {
    const summary =  req.body.summary;
    const test_id = req.body.test_id;
    const project_id = req.body.project_id;
    const tester_id = req.body.tester_id;
    const reproduce_steps = req.body.reproduce_steps;
    const actual_results = req.body.actual_results;
    const expected_results = req.body.expected_results;
    const bug_type = req.body.bug_type;
    const bug_severity = req.body.bug_severity;

    const bug = new BugSchema({
        _id: new mongoose.Types.ObjectId(),
        summary: summary,
        test_id: test_id,
        project_id: project_id,
        tester_id: tester_id,
        reproduce_steps: reproduce_steps,
        actual_results: actual_results,
        expected_results: expected_results,
        bug_type: bug_type,
        bug_severity: bug_severity
    })   
    
    bug.save().then(result => {
        console.log(result);
        res.json(result);
    });
})

app.get('/getBugDetails', (req, res) => {
    var _id = req.query._id;
    BugSchema.find({_id: _id}).exec().then(result=>{
        res.json(result);
    })
})

app.get('/getBugsList', (req, res) => {
    BugSchema.find().exec().then(result=>{
        res.json(result);
    })
})

app.post('/createTestReport', (req, res) => {

})



app.listen(3001);
console.log('Server is listening on port 3001');
