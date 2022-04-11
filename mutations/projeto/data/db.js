const usuarios = [
    { id: 1, nome: "Israel Souza", email: "israel@example.com", salario: 4000, idade: 22, perfilId: 1, status: "BLOQUEADO" },
    { id: 2, nome: "Matheus Faria", email: "matheusf@example.com", salario: 5000, idade: 25, perfilId: 2, status: "ATIVO"  },
    { id: 3, nome: "Gileade Trindade", email: "gileadet@example.com", salario: 6500, idade: 30, perfilId: 1, status: "INATIVO" }
]


const perfis = [
    { id: 1, nome: "Comum" },
    { id: 2, nome: "Administrador" }
]


module.exports = {usuarios, perfis}