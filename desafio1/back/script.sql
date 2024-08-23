create table Livro(
    id int not null primary key auto_increment,
    nomelivro varchar(20) not null,
    nomeautor varchar(20) not null,
    descricaolivro varchar(100) not null,
    cadastramento varchar(8) not null
);
