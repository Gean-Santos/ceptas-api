CREATE DATABASE BDCePTAS;

USE BDCePTAS;

CREATE TABLE `Entidade_Apreensao` (
	`id_entidade_apreensao` int NOT NULL AUTO_INCREMENT,
	`tp_entidade_apreensao` varchar(50) NOT NULL,
	`nm_entidade_apreensao` varchar(50) NOT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
	PRIMARY KEY (`id_entidade_apreensao`)
);

CREATE TABLE `Tipo_Apreensao` (
	`id_tipo_apreensao` int NOT NULL AUTO_INCREMENT,
	`tipo_apreensao` varchar(50) NOT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
	PRIMARY KEY (`id_tipo_apreensao`)
);

CREATE TABLE `Apreensao` (
	`id_apreensao` int(6) NOT NULL AUTO_INCREMENT,
	`historico_completo` varchar(800) NOT NULL,
	`local_captura` varchar(80) NOT NULL,
	`id_entidade_apreensao` int(6) NOT NULL,
	`id_tipo_apreensao` int(6) NOT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
	PRIMARY KEY (`id_apreensao`)
);

CREATE TABLE `Documento` (
	`id_documento` bigint(7) NOT NULL,
	`tp_documento` varchar(25) NOT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
	PRIMARY KEY (`id_documento`)
);

CREATE TABLE `Especie` (
	`id_especie` int(6) NOT NULL AUTO_INCREMENT,
	`nm_popular` varchar(60) NOT NULL,
	`ds_especie` varchar(80) NOT NULL,
	`grupo_taxonomico` varchar(80) NOT NULL,
	`nm_cientifico` varchar(80) NOT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
	PRIMARY KEY (`id_especie`)
);

CREATE TABLE `Recinto` (
	`id_recinto` int(6) NOT NULL AUTO_INCREMENT,
	`ds_recinto` varchar(50) NOT NULL,
	`ds_local` varchar(50) NOT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
	PRIMARY KEY (`id_recinto`)
);

CREATE TABLE `Pessoa` (
	`id_pessoa` int NOT NULL AUTO_INCREMENT,
	`nm_pessoa` varchar(100) NOT NULL,
	`tp_pessoa` varchar(20) NOT NULL,
	`ds_email` varchar(50) NOT NULL,
	`genero_pessoa` varchar(30) NOT NULL,
	`telefone_pessoa` bigint NOT NULL,
	`endereco_pessoa` varchar(60) NOT NULL,
	`tp_endereco` varchar(30) NOT NULL,
	`nu_cep` numeric(8) NOT NULL,
	`bairro_endereco` varchar(30) NOT NULL,
	`cidade_endereco` varchar(30) NOT NULL,
	`uf_endereco` varchar(3) NOT NULL,
	`id_documento` bigint NOT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
	PRIMARY KEY pessoa(`id_pessoa`));

CREATE TABLE `Animal` (
	`id_animal` int(6) NOT NULL AUTO_INCREMENT,
	`sexo_animal` varchar(30) NOT NULL,
	`dt_ultima_atualizacao` DATE NOT NULL,
	`dt_idade_estimada` DATE NOT NULL,
	`idade_estimada` numeric(10) NOT NULL,
	`marcacao` varchar(40) NOT NULL,
	`ds_maturidade` varchar(40) NOT NULL,
	`risco_extincao` varchar(40) NOT NULL,
	`id_especie` int(6) NOT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
	PRIMARY KEY (`id_animal`)
);

CREATE TABLE `Destino` (
	`id_destino` int(6) NOT NULL AUTO_INCREMENT,
	`ds_destino` varchar(60) NOT NULL,
	`tp_destino` varchar(50) NOT NULL,
	`dt_saida` DATE NOT NULL,
	`estado_animal` varchar(50) NOT NULL,
	`id_animal` int(6) NOT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
	PRIMARY KEY (`id_destino`)
);

CREATE TABLE `Evento` (
	`id_evento` int(6) NOT NULL AUTO_INCREMENT,
	`dt_evento` DATE NOT NULL,
	`hr_evento` DATETIME(6) NOT NULL,
	`dt_saida` DATE NOT NULL,
	`tp_evento` varchar(50) NOT NULL,
	`RI` numeric(20) NOT NULL,
	`nu_sf` numeric(20) NOT NULL,
	`id_recinto` int(20) NOT NULL,
	`id_destino` int(20) NOT NULL,
	`id_tipo_apreensao` int(6) NOT NULL,
	`id_apreensao` int(6) NOT NULL,
	`id_funcionario` int(6) NOT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
	PRIMARY KEY (`id_evento`)
);

CREATE TABLE `Funcionario` (
	`id_funcionario` int NOT NULL AUTO_INCREMENT,
	`nu_matricula` numeric(6) NOT NULL,
	`chefe_funcionario` varchar(50) NOT NULL,
	`nm_cargo` varchar(50) NOT NULL,
	`dt_admissao` DATE NOT NULL,
	`dt_desligamento` DATE ,
	`dt_nascimento` DATE NOT NULL,
	`login_funcionario` varchar(20) NOT NULL,
	`senha_funcionario` varchar(50) NOT NULL,
	`foto` blob(1000) ,
	`id_pessoa` int(6) NOT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
	PRIMARY KEY (`id_funcionario`)
);

CREATE TABLE `Exame_Fisico` (
	`id_exame_fisico` int(6) NOT NULL AUTO_INCREMENT,
	`estado_animal` varchar(30) NOT NULL,
	`foto_exame_fisico` blob(1000) NOT NULL,
	`estado_decomposicao` varchar(50) NOT NULL,
	`peso` numeric(10) NOT NULL,
	`temperatura` numeric(10) NOT NULL,
	`fc_bpm` numeric(10) NOT NULL,
	`fr_mpm` numeric(10) NOT NULL,
	`maus_tratos` varchar(30) NOT NULL,
	`sistema_neurologico` varchar(60) NOT NULL,
	`sistema_respiratorio` varchar(60) NOT NULL,
	`sistema_digestivo` varchar(60) NOT NULL,
	`sistema_osteomuscular` varchar(60) NOT NULL,
	`sistema_cardiovascular` varchar(60) NOT NULL,
	`sistema_tegumentar` varchar(60) NOT NULL,
	`ds_atitude` varchar(60) NOT NULL,
	`nivel_desidratacao` varchar(60) NOT NULL,
	`ds_estado_nutricional` varchar(60) NOT NULL,
	`ds_domesticacao` varchar(60) NOT NULL,
	`id_animal` int(6) NOT NULL,
	`id_exame_complementar` int(6),
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
	PRIMARY KEY (`id_exame_fisico`)
);

CREATE TABLE `Exame_Complementar` (
	`id_exame_complementar` int(6) NOT NULL AUTO_INCREMENT,
	`especificacao_exame` varchar(600) NOT NULL,
	`resultado_exame` varchar(600) NOT NULL,
	`id_exame_fisico` int(6) NOT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
    PRIMARY KEY (`id_exame_complementar`)
);

CREATE TABLE `Evento_Animal` (
	`id_evento_animal` int(6) NOT NULL AUTO_INCREMENT,
	`dt_evento_animal` DATE NOT NULL,
	`tp_evento_animal` varchar(30) NOT NULL,
	`foto_animal` blob(1000) NOT NULL,
	`observacao` varchar(2000) NOT NULL,
	`id_exame_fisico` int(6) NOT NULL,
	`id_exame_complementar` int(6) NOT NULL,
	`id_evento` int(6) NOT NULL,
	`id_animal` int(6) NOT NULL,
	`id_funcionario` int(6) NOT NULL,
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL,
	PRIMARY KEY (`id_evento_animal`)
);

ALTER TABLE `Apreensao` ADD CONSTRAINT `Apreensao_fk0` FOREIGN KEY (`id_entidade_apreensao`) REFERENCES `Entidade_Apreensao`(`id_entidade_apreensao`);

ALTER TABLE `Apreensao` ADD CONSTRAINT `Apreensao_fk1` FOREIGN KEY (`id_tipo_apreensao`) REFERENCES `Tipo_Apreensao`(`id_tipo_apreensao`);

ALTER TABLE `Pessoa` ADD CONSTRAINT `Pessoa_fk0` FOREIGN KEY (`id_documento`) REFERENCES `Documento`(`id_documento`);

ALTER TABLE `Animal` ADD CONSTRAINT `Animal_fk0` FOREIGN KEY (`id_especie`) REFERENCES `Especie`(`id_especie`);

ALTER TABLE `Destino` ADD CONSTRAINT `Destino_fk0` FOREIGN KEY (`id_animal`) REFERENCES `Animal`(`id_animal`);

ALTER TABLE `Evento` ADD CONSTRAINT `Evento_fk0` FOREIGN KEY (`id_recinto`) REFERENCES `Recinto`(`id_recinto`);

ALTER TABLE `Evento` ADD CONSTRAINT `Evento_fk1` FOREIGN KEY (`id_destino`) REFERENCES `Destino`(`id_destino`);

ALTER TABLE `Evento` ADD CONSTRAINT `Evento_fk2` FOREIGN KEY (`id_tipo_apreensao`) REFERENCES `Tipo_Apreensao`(`id_tipo_apreensao`);

ALTER TABLE `Evento` ADD CONSTRAINT `Evento_fk3` FOREIGN KEY (`id_apreensao`) REFERENCES `Apreensao`(`id_apreensao`);

ALTER TABLE `Evento` ADD CONSTRAINT `Evento_fk4` FOREIGN KEY (`id_funcionario`) REFERENCES `Funcionario`(`id_funcionario`);

ALTER TABLE `Funcionario` ADD CONSTRAINT `Funcionario_fk0` FOREIGN KEY (`id_pessoa`) REFERENCES `Pessoa`(`id_pessoa`);

ALTER TABLE `Exame_Fisico` ADD CONSTRAINT `Exame_Fisico_fk0` FOREIGN KEY (`id_animal`) REFERENCES `Animal`(`id_animal`);

ALTER TABLE `Exame_Fisico` ADD CONSTRAINT `Exame_Fisico_fk1` FOREIGN KEY (`id_exame_complementar`) REFERENCES `Exame_Complementar`(`id_exame_complementar`);

ALTER TABLE `Exame_Complementar` ADD CONSTRAINT `Exame_Complementar_fk0` FOREIGN KEY (`id_exame_fisico`) REFERENCES `Exame_Fisico`(`id_exame_fisico`);

ALTER TABLE `Evento_Animal` ADD CONSTRAINT `Evento_Animal_fk0` FOREIGN KEY (`id_exame_fisico`) REFERENCES `Exame_Fisico`(`id_exame_fisico`);

ALTER TABLE `Evento_Animal` ADD CONSTRAINT `Evento_Animal_fk1` FOREIGN KEY (`id_exame_complementar`) REFERENCES `Exame_Complementar`(`id_exame_complementar`);

ALTER TABLE `Evento_Animal` ADD CONSTRAINT `Evento_Animal_fk2` FOREIGN KEY (`id_evento`) REFERENCES `Evento`(`id_evento`);

ALTER TABLE `Evento_Animal` ADD CONSTRAINT `Evento_Animal_fk3` FOREIGN KEY (`id_animal`) REFERENCES `Animal`(`id_animal`);

ALTER TABLE `Evento_Animal` ADD CONSTRAINT `Evento_Animal_fk4` FOREIGN KEY (`id_funcionario`) REFERENCES `Funcionario`(`id_funcionario`);


insert into Especie values(null,"arara-azul", "arara", "Ave", "Anodorhynchus leari", "2019-11-16 03:39:40.741", "2019-11-16 03:39:40.741" );
insert into Documento values(null,"CPF", "2019-11-16 03:39:40.741", "2019-11-16 03:39:40.741");
select * from Documento;
