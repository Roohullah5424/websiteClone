const express = require('express');
const mongoose = require("mongoose");
const path = require('path');
const app = express();
const port = 3000;

const uri = 
"mongodb+srv://rooh5424:CIDhzhoG13QITvnl@cluster0.uta5j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("connected to mongoDB");
  } catch (error) {
    console.error(error);
  }
}
connect();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/courses', (req, res) => {
    res.render('courses');  // Renders views/about.ejs
  });
  

app.use(express.static(path.join(__dirname, 'public')));
  
  /*app.get('/contact', (req, res) => {
    res.send('<h1>Contact Page</h1><p>Contact us at contact@example.com</p>');
  });*/
  


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

