var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var students = [
{id: 1, name: 'Iron man', college: 'MIT'},
{    id: 2,    name: 'Rahul',college: 'CBIT'},
{    id: 3,    name: 'Messi',    college: 'CBIT'},
{    id: 4,    name: 'Dybala',    college: 'Stanford'}];

var currentId = 4;

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/students', function(req, res) {
    res.send({ students: students });
});

app.post('/students', function(req, res) {
    currentId++;
    console.log(req.body.name);
    students.push({
        id: currentId,
        name: req.body.name,
        college: req.body.college
    });
    res.send('Successfully created product!');
});

app.put('/students/:id', function(req, res) {
    var id = req.params.id;
    var newName = req.body.newName;
    var newCollege = req.body.newCollege;
    var found = false;

    students.forEach(function(student, index) {
        if (!found && students.id === Number(id)) {
            student.name = newName;
            student.college = newCollege;
        }
    });

    res.send('Succesfully updated product!');
});

app.delete('/students/:id', function(req, res) {
    var id = req.params.id;
    var found = false;

    students.forEach(function(student, index) {
        if (!found && student.id === Number(id)) {
            students.splice(index, 1);
        }
    });
    res.send('Successfully deleted product!');
});

app.listen(PORT, function() {
    console.log('Server listening on ' + PORT);
});
