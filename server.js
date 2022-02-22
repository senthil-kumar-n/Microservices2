var express = require('express');
var app = express();

app.use(express.json());

courselist = [
{ id: 1, name:"aws"},
{ id: 2, name:"gcp"},
{ id: 3, name:"Azure"},
];


app.get('/', function (req, res) {
   res.send('Hello Home');
});

app.get('/api/courses', function (req, res) {
    res.send(courselist);
 });

app.get('/api/courses/:id', function (req, res) {
    const course = courselist.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send("The Course wit given id is not found ")
    res.send(course)    
 });

 app.post('/api/courses', function (req, res) {
    const course = {
id: courselist.length +1,
name: req.body.name
    };
courselist.push(course);
console.log(imagef)
res.send(course)

    

 });


 

app.listen(3000, function (){console.log('Listening on port 3000')})

//var server = app.listen(8081, function () {
//   var host = server.address().address
// var port = server.address().port
   
  // console.log("Example app listening at http://%s:%s", host, port)
//})