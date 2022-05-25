const express = require('express')
const sqlite = require('sqlite3')
const cors = require('cors')
const morgan = require('morgan')
const path=require('path')
const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

const port = 8000

const db_name = path.join(__dirname, "database", "database1.db");
const db = new sqlite.Database(db_name, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'database1.db'");
});


const sql_create = `CREATE TABLE IF NOT EXISTS modele  (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT ,
    description TEXT ,
    code_html TEXT ,
    comments TEXT,
    created_at DATETIME default CURRENT_TIMESTAMP ,
    updated_at DATETIME default CURRENT_TIMESTAMP
  );`;
  
  db.run(sql_create, err => {
    if (err) {
      return console.error(err.message);
    }
    console.log("Successful creation of the 'modele' table");
  });

  app.post("/models/new", async(req, res) => {
    //   console.log(await req.body) // traitement

    const sql = "INSERT INTO modele  (title, description,code_html,comments) VALUES (?, ?, ?, ?)";
    const book = [req.body.nom, req.body.description, req.body.sourcehtml,req.body.remarques];

    db.run(sql, book, err => {
    if (err) {
    return console.error(err.message);
   }
    res.send({
        message:'donnees recu avec succes'
    })
    });

  });

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})