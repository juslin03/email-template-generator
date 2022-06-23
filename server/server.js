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

  app.get("/models", async(req, res) => {

    const sql = "SELECT * FROM modele ";
    db.all(sql,(err,data) => {
      if(err) return;
      // Success
     console.log(data);
     res.send({
      data
    });
     
    });

  });

  app.delete('/models/:id', function (req, res) {
    console.log(req.params.id)
    // if(!req.params.id) return;

    db.run('DELETE from modele where id='+req.params.id,err =>{
      if (err) return;
      res.send({message:'suppresion reussi'});
    });
  });

  

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})