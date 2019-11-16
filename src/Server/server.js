const express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var fileUpload = require('express-fileupload');
var fs = require('fs');
const BugSchema = require('../../models/BugSchema');
const ScriptsSchema = require('../../models/ScriptsSchema');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://mtaas:mtaas@cluster0-jzndm.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());



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

})

app.post('/runScript', (req, res) => {

})

app.post('/deleteScript', (req, res) => {

})

app.post('/deleteLog', (req, res) => {

})

app.get('/downloadLog', (req, res) => {
    
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
