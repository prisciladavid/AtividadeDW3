const express = require('express');

const app = express();
const port = 40000;

app.use(express.json());

const mostraVetorOrdenado = (req, res) => {
    const { vetor } = req.body;

    if (vetor.length < 2 || vetor.length > 20) {
        res.json({ status: 'Erro', Erro: "Digite no mínimo 2 e no máximo 20 elementos!" });
    } else {
        vetor.sort((a, b) => a - b);
        res.json({VetorOrdenado: vetor });
    }
};

const mostraMenorMaior = (req, res) => {
    const { vetor } = req.body;

    if (vetor.length < 2 || vetor.length > 20) {
        res.json({ status: 'Erro', Erro: "Digite no mínimo 2 e no máximo 20 elementos!" });
    } else {
        const menor = Math.min(...vetor);
        const maior = Math.max(...vetor);

        res.json({numMenor: menor, numMaior: maior });
    }
};

app.post("/mostraVetorOrdenado", mostraVetorOrdenado);
app.post("/mostraMenorMaior", mostraMenorMaior);


app.listen(port, () => {
    console.log(`App listening at port ${port}`)  
});


