

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const producers = {
    titulo: "Produtores",
    lista: [
        {
            nome: "Green",
            imagem: green,
            distancia: `${randomNumber(1, 500)}m`,
            estrelas: randomNumber(1, 5),
        },
        {
            nome: "Salad",
            imagem: salad,
            distancia: `${randomNumber(1, 500)}m`,
            estrelas: randomNumber(1, 5),
        },
        {
            nome: "Jenny Jack Farm",
            imagem: jennyJack,
            distancia: `${randomNumber(1, 500)}m`,
            estrelas: randomNumber(1, 5),
        },
        {
            nome: "Grow",
            imagem: grow,
            distancia: `${randomNumber(1, 500)}m`,
            estrelas: randomNumber(1, 5),
        },
        {
            nome: "Potager",
            imagem: potager,
            distancia: `${randomNumber(1, 500)}m`,
            estrelas: randomNumber(1, 5),
        }
    ]
}

export default producers;