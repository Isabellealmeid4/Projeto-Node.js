create table Alimento(
    id int not null primary key auto_increment,
    produto varchar(20) not null,
    fornecedor varchar(20) not null,
    descricaoproduto varchar(100) not null,
    preco float(8) not null,
    custo float(8) not null

);
