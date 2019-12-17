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
const userData = require('../../models/userData');
const ProjectSchema = require('../../models/ProjectSchema');
const ApplicationSchema = require('../../models/ApplicationSchema');
const Messages = require('../../models/Messages');
const Chatkit = require('@pusher/chatkit-server');
const NotificationSchema = require('../../models/NotificationSchema');
require('dotenv').config({ path: '.env' });

const chatkit = new Chatkit.default({
    instanceLocator: process.env.CHATKIT_INSTANCE_LOCATOR,
    key: process.env.CHATKIT_SECRET_KEY,
});

// const port = 8002;
// var server = require("http").Server(app);
// const io = require("socket.io")(server);
// const users = require("./configs/users");

const http = require('http').Server(app);
const io = require('socket.io')(http);

mongoose.connect('mongodb+srv://mtaas:mtaas@cluster0-jzndm.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());
app.use('/', express.static(__dirname + '/scripts'));
app.use('/', express.static(__dirname + '/log_files'));
app.use('/', express.static(__dirname + '/generated'));



app.get('/', (req, res)=>{
    console.log('Reached Server');
})

app.post('/signup',function(req,res){
    var name= req.body.Name;
    var username=req.body.Email;
    var password=req.body.Password;
    var {lat, lon} = req.body;
    // password = md5(password);
    var role=req.body.Role;
    
    userData.find({username:username}).exec().then(result=>{
      
      if(result.length>0){
        res.send(false);
      }
      else{
        console.log(name);
        const user_id = Math.floor(Math.random()*90000) + 10000;

        const entry = new userData({
          _id: new mongoose.Types.ObjectId(),
          name:  name,
          user_id: user_id,
          username: username,
          password: password,
          role: role,
          lat: lat,
          lon: lon,
          skils:'',
          projectid:'',
          projects:'' ,
        })
          if(name && username)
          {
          console.log('Entered');
          entry.save().then(result=>{
          console.log(res);
          res.send(true);
          }).catch(err=>console.log(err));
          }
      }
    })
});

app.post('/login',function(req,res){
    var x=req.body.id;
    var y=req.body.pwd;
    // y=md5(y);
    // var z=req.body.login;
    var flag = '';
    var query={username:x,password:y};
    userData.find(query).exec().then(result=>{
      if(result.length<=0){
        res.send(false);
      }
      else{
      console.log("Login result",result);
      res.json(result);
      }
    })
})


app.get('/getProfile',function(req,res){
    var email=req.query.email;
    console.log('Profile in  view',email);
    var query={username:email};
    userData.find(query).exec().then(result=>{
      console.log("In Update Profile View",result);
      res.json(result);
    })
});

app.get('/getTesterProfile', function(req,res){
    var tester_id=req.query.tester_id;
    // console.log('Profile in  view',email);
    var query={user_id: tester_id};
    userData.find(query).exec().then(result=>{
      console.log("Get tester Profile",result);
      res.json(result);
    })
});

app.get('/getPosition', function(req,res){
    // var tester_id=req.query.tester_id;
    // console.log('Profile in  view',email);
    // var query={user_id: tester_id};
    userData.find({}).exec().then(result=>{
      console.log("Get tester Profile",result);
      res.json(result);
    })
});

app.post('/approve', (req, res)=>{
    const {tester_id, project_id} = req.body;
    const query = {$set: {result: true}}
    ApplicationSchema.update({tester_id: tester_id, project_id: project_id}, query).exec().then(result=>{
        console.log(result);
        res.send(true);
    })
})

app.post('/decline', (req, res)=>{
    const {tester_id, project_id} = req.body;
    const query = {$set: {result: false}}
    ApplicationSchema.update({tester_id: tester_id, project_id: project_id}, query).exec().then(result=>{
        console.log(result);
        res.send(true);
    })
})

app.post('/generateScript', (req, res)=>{
    const {tester_id, project_id, app_name_loc, f_name} = req.body;
    console.log(app_name_loc)
    const content = 'const wdio = require("webdriverio");\n'+
                    'const assert = require("assert");\n'+
                    'const db = require("./database");\n'+
                    'const f = require("./file");\n'+
                    'const opts = {\n'+
                    'port: 4723,\n'+
                    '   capabilities: {\n'+
                    '   platformName: "Android",\n'+
                    '   platformVersion: "8",\n'+
                    '   deviceName: "Android Emulator",\n'+
                    '   app: __dirname + "/apps/"' + app_name_loc +',\n'+
                    '   appPackage: "io.appium.android.apis",\n'+
                    '   appActivity: ".view.TextFields",\n'+
                    '   automationName: "UiAutomator2"\n'+
                    '  }\n'+
                    '};\n';


    var group = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var randomString = '';
    for (var i = 0; i < 5; i++){
        randomString += group.charAt(Math.floor(Math.random() * group.length));
    }
    fs.writeFile('generated/'+randomString+f_name+'.js', content, function(err){
        if(err) throw err;
        console.log(err);
    })

    res.json({link: 'http://localhost:3001/'+randomString+f_name+'.js'})
    
})

app.post('/updateprofile',function(req,res){
    var email= req.body.email;
    var name=req.body.name;
    var password=req.body.password;
    var skills=req.body.skills;
    var role=req.body.role;
    var projects=req.body.projects;
    var resume=req.body.resume;

    var query={$set: {username:email,name:name,role:role,skills:skills,projects:projects,resume:resume}};
    userData.update({username:email},query).exec().then(result=>{
        console.log("Profile Updated Sucessfully",result);
        res.send(true);
    }).catch(err=>console.log(err));
    
})


app.post('/users', (req, res) => {
    const { userId } = req.body;
  
    chatkit
      .createUser({
        id: userId,
        name: userId,
      })
      .then(() => {
        res.sendStatus(201);
      })
      .catch(err => {
        if (err.error === 'services/chatkit/user_already_exists') {
          console.log(`User already exists: ${userId}`);
          res.sendStatus(200);
        } else {
          res.status(err.status).json(err);
        }
      });
  });
  
  app.post('/authenticate', (req, res) => {
    const authData = chatkit.authenticate({
      userId: req.query.user_id,
    });
    res.status(authData.status).send(authData.body);
  });

app.post('/createProject', (req, res)=>{
    const {manager_id, manager_name, app_link, proj_name, proj_desc} = req.body;
    console.log('MGID ', manager_name)
    let app = req.files.app;
    var app_name = req.files.app.name;

    var randomString = "";
    var group = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++){
        randomString += group.charAt(Math.floor(Math.random() * group.length));
    }

    app.mv(
        __dirname + '/scripts/apps/' + randomString + `${app_name}`,
        function (err) {
          if (err) throw err;
          console.log('Done');
    })

    fileLoc = 'http://localhost:3001/'+randomString+`${app_name}`;
    const project_id = Math.floor(Math.random()*90000) + 10000;
    const entry = new ProjectSchema({
        _id: new mongoose.Types.ObjectId(),
        app_name: app_name,
        project_id: project_id,
        manager_name: manager_name,
        manager_id: manager_id,
        app_link: app_link,
        project_name: proj_name,
        proj_desc: proj_desc,
        app_location: fileLoc,
        app_name_loc: randomString+app_name,
        date: Date.now()
    });

    entry.save().then(result=>{
        console.log(result);
        res.send(true);
    }).catch(err=>{
        console.log(err);
    })
})

app.get('/getManagerProjects', (req, res)=>{
    const manager_id = req.query.manager_id;
    console.log(manager_id);
    ProjectSchema.find({manager_id: manager_id}).exec().then(result=>{
        console.log(result)
        res.json(result);
    })
})

app.post('/notify', (req, res)=>{
    const {tester_id, name, project_id, notification} = req.body;

    const entry = new NotificationSchema({
        _id: new mongoose.Types.ObjectId(),
        tester_id: tester_id,
        tester_name: name,
        project_id: project_id,
        notification: notification,
        date: Date.now()
    })

    entry.save().then(result=>{
        console.log(result);
        res.send(true);
    })
})


app.get('/getNotifications', (req, res)=>{
    const {project_id} = req.query;
    NotificationSchema.find({project_id: project_id}).exec().then(result=>{
        console.log(result);
        res.json(result);
    })
})

app.get('/getAllProjects', (req, res)=>{
    ProjectSchema.find({}).exec().then(result=>{
        console.log(result)
        res.json(result);
    }).catch(err=>{
        console.log(err);
    })
});

app.get('/getProjectDetail', (req, res)=>{
    var {project_id} = req.query;
    ProjectSchema.find({project_id: project_id}).exec().then(result=>{
        console.log(result);
        res.json(result);
    })
})

app.get('/getApps', (req, res)=>{
    ApplicationSchema.find({manager_id: req.query.manager_id}).exec().then(result=>{
        res.json(result);
    }).catch(err=>{
        console.log(err);
    })
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

    const {script_name, tester_id, project_id, name} = req.body;
    console.log('TESTER NAME', name)
    const data = new ScriptsSchema({
        _id: new mongoose.Types.ObjectId(),
        script_name: script_name,
        tester_id: tester_id,
        project_id: project_id,
        file_name: filename,
        file_location: fileLoc,
        date: Date.now(),
        tester_name: name
    })

    data.save().then(result=>{
        console.log(result);
        res.send(true);
    }).catch(err=>{
        console.log(err);
    })

})

app.post('/checkApplication', (req, res)=>{
    const tester_id = req.body.tester_id;
    const project_id = req.body.project_id;
    ApplicationSchema.find({tester_id: tester_id, project_id: project_id}).exec().then(result=>{
        if(result.data){
            res.send(true);
        }
        else{
            res.send(false);
        }
    })
})

app.get('/getMyApps', (req, res)=>{
    const tester_id = req.query.tester_id;
    ApplicationSchema.find({tester_id: tester_id}).exec().then(result=>{
        res.json(result);
    }).catch(err=>{
        console.log(err);
    })
})

app.get('/getApprovedApps', (req, res)=>{
    const tester_id = req.query.tester_id;
    ApplicationSchema.find({tester_id: tester_id, result: true}).exec().then(result=>{
        res.json(result);
    }).catch(err=>{
        console.log(err);
    })
})



app.post('/apply', (req, res)=>{
    const {project_id, manager_name, manager_id, project_name, app_link, app_name, proj_desc, app_location, tester_id} = req.body;
    const entry = new ApplicationSchema({
        _id: new mongoose.Types.ObjectId(),
        project_name: project_name,
        project_id: project_id,
        manager_id: manager_id,
        manager_name: manager_name,
        app_link: app_link,
        app_name: app_name,
        proj_desc: proj_desc,
        app_location: app_location,
        tester_id: tester_id,
        apply: true
    })

    entry.save().then(result=>{
        console.log(result);
        res.send(true);
    }).catch(err=>{
        console.log(err);
    })
})

app.get('/getScripts', (req, res) => {
    // const {tester_id} = req.query;

    const tester_id = req.query.tester_id;
    const project_id = req.query.project_id;
    ScriptsSchema.find({tester_id: tester_id, project_id: project_id}).exec().then(result=>{
        console.log(result);
        res.json(result);
    }).catch(err=>{
        console.log(err);
    })
})

app.get('/getScriptsM', (req, res) => {
    // const {tester_id} = req.query;

    // const tester_id = req.query.tester_id;
    const project_id = req.query.project_id;
    ScriptsSchema.find({project_id: project_id}).exec().then(result=>{
        console.log(result);
        res.json(result);
    }).catch(err=>{
        console.log(err);
    })
})

app.get('/getScriptsM', (req, res) => {
    // const {tester_id} = req.query;

    // const tester_id = "123";
    const {project_id} = req.query;
    ScriptsSchema.find({project_id: project_id}).exec().then(result=>{
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

    Logs.find({tester_id: '123'}).exec().then(result=>{
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

app.post('/createMessage', (req, res)=>{
    const msg = req.body.msg;
    const entry = new Messages({
        _id: new mongoose.Types.ObjectId(),
        msg: msg
    })
    entry.save().then(result=>{
        console.log(result);
        res.send(true);
    })
})

app.get('/messages', (req, res)=>{
    Messages.find({}).then(result=>{
        res.json(result);
    })
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

app.post('/makePayment', (req, res)=>{
    const {tester_id, project_id} = req.body;
    ProjectSchema.find({project_id: project_id}).exec().then(result=>{
        console.log(result);
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

app.get('/getAmount', (req, res)=>{
    
})

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
    const project_id = req.body.projectid;
    const tester_id = req.body.testerid;
    const reproduce_steps = req.body.steps;
    const actual_results = req.body.actual_results;
    const expected_results = req.body.expected_results;
    const bug_type = req.body.bug_type;
    const bug_severity = req.body.bug_severity;

    const bug = new BugSchema({
        _id: new mongoose.Types.ObjectId(),
        summary: summary,
        project_id: project_id,
        tester_id: tester_id,
        reproduce_steps: reproduce_steps,
        actual_results: actual_results,
        expected_results: expected_results,
        bug_type: bug_type,
        bug_severity: bug_severity,
        date: Date.now()
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
    const {project_id} = req.query;
    BugSchema.find({project_id: project_id}).exec().then(result=>{
        res.json(result);
    })
});

app.post('/updateProject', (req, res)=>{
    const {project_id, project_name, proj_desc, app_link} = req.body;
    var query={$set: {project_name: project_name, proj_desc: proj_desc, app_link: app_link}};
    ProjectSchema.update({project_id: project_id}, query).exec().then(result=>{
        console.log(result);
        res.send(true);
    })
})

app.get('/getTesterProjects', (req, res)=>{
    
})

app.post('/createTestReport', (req, res) => {

})

app.get('/getTesters', (req, res)=>{
    userData.find({role: 'T'}).exec().then(result=>{
        console.log(result);
        res.json(result);
    })
});





// var clients = {};

// io.on("connection", function(client) {
//   client.on("sign-in", e => {
//     let user_id = e.id;
//     if (!user_id) return;
//     client.user_id = user_id;
//     if (clients[user_id]) {
//       clients[user_id].push(client);
//     } else {
//       clients[user_id] = [client];
//     }
//   });

//   client.on("message", e => {
//     let targetId = e.to;
//     let sourceId = client.user_id;
//     if(targetId && clients[targetId]) {
//       clients[targetId].forEach(cli => {
//         cli.emit("message", e);
//       });
//     }

//     if(sourceId && clients[sourceId]) {
//       clients[sourceId].forEach(cli => {
//         cli.emit("message", e);
//       });
//     }
//   });

//   client.on("disconnect", function() {
//     if (!client.user_id || !clients[client.user_id]) {
//       return;
//     }
//     let targetClients = clients[client.user_id];
//     for (let i = 0; i < targetClients.length; ++i) {
//       if (targetClients[i] == client) {
//         targetClients.splice(i, 1);
//       }
//     }
//   });
// });

// app.get("/users", (req, res) => {
//   res.send({ data: users });
// });

// server.listen(port, () =>
//   console.log(`Example app listening on port ${port}!`)
// );


// io.sockets.on('connection', function(socket) {
//     socket.on('username', function(username) {
//         socket.username = username;
//         io.emit('is_online', '🔵 <i>' + socket.username + ' join the chat..</i>');
//     });

//     socket.on('disconnect', function(username) {
//         io.emit('is_online', '🔴 <i>' + socket.username + ' left the chat..</i>');
//     })

//     socket.on('chat_message', function(message) {
//         io.emit('chat_message', '<strong>' + socket.username + '</strong>: ' + message);
//     });

// });


// const server = http.listen(8080, function() {
//     console.log('listening on *:8080');
// });
app.listen(3001);
console.log('Server is listening on port 3001');
