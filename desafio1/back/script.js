const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyparser = require("body-parser");

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    database: 'biblioteca'
});

const create = (req, res) => {
   let nomelivro = req.body.nomelivro;
   let nomeautor = req.body.nomeautor;
   let descricaolivro = req.body.descricaolivro;
   let cadastramento = req.body.cadastramento;
   
   let query = `insert into Livro(nomelivro, nomeautor, descricaolivro, cadastramento) VALUE`;
   query += `('${nomelivro}', '${nomeautor}', '${descricaolivro}', '${cadastramento}')`;

   con.query(query, (err, result) => {
        if(err){
            console.log("Erro ao cadastrar livro");
        } else {
            console.log("Livro cadastrado com sucesso!");
        }
   })
}

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({ extended:true}));

const teste = (req, res) => {
    console.log("Funcionando");
}

app.get("/", teste);
app.post("/Livro", create);

app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000");
})


