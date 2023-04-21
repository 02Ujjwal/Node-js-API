const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/courses', (req, res) => {
  const courses = [
    { title: 'Introduction to Java', description: 'Basics of Java' },
    { title: 'Introduction to Python', description: 'Basics of Python' },
    { title: 'Introduction to CPP', description: 'Basics of CPP' },
  ];
  res.send(courses);
});

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});