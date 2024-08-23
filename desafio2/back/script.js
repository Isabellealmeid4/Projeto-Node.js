const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyparser = require("body-parser");

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    database: 'cantina'
});

const create = (req, res) => {
   let produto = req.query.produto;
   let fornecedor = req.query.fornecedor;
   let descricaoproduto = req.query.descricaoproduto;
   let preco = req.query.preco;
   let custo = req.query.custo;
   
   let query = `insert into alimento(produto, fornecedor, descricaoproduto, preco, custo) VALUE`;
   query += `('${produto}', '${fornecedor}', '${descricaoproduto}', '${preco}', '${custo}}')`;

   con.query(query, (err, result) => {
        if(err){
            console.log("Erro ao cadastrar alimento");
        } else {
            console.log("Alimento cadastrado com sucesso!");
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
app.post("/Alimento", create);

app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000");
})


