import { Router } from "express";

const routes = Router();

//rota de teste, hello world
routes.get("/", (req, res) =>{
    return res.send('rota de teste')
})

//rota que retorna um json, uma lista nomeada "items"
routes.get("/funcionarios", (req, res) => {
    return res.json({
        items: [
            {
                id: "1",
                nome: "André",
                cargo: "dev",
                idade: 37,
                custoPorHora: 120.0,
                temLicenca: false
            },
            {
                id: "2",
                nome: "Adulto",
                cargo: "aluno",
                idade: 17,
                custoPorHora: 10.0,
                temLicenca: true
            },
            {
                id: "3",
                nome: "3K",
                cargo: "caixa do condor",
                idade: 22,
                custoPorHora: 32.70,
                temLicenca: true
            },
        ]
    })
})

routes.get("/abobra", (req, res) => {
    return res.json({
        photos: [
            {
                id: "1",
                nome: "imagem1",
                imagem: "https://prefeitura.rio/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-16-at-16.42.03.jpeg",
            },
            {
                id: "2",
                nome: "imagem2",
                imagem: "https://prefeitura.rio/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-16-at-16.42.03.jpeg",
            },
            {
                id: "3",
                nome: "imagem3",
                imagem: "https://prefeitura.rio/wp-content/uploads/2021/12/WhatsApp-Image-2021-12-16-at-16.42.03.jpeg",
            },
        ]
    })
})

export default routes;