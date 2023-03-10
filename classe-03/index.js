function taAberto(data) {
    const horaAtual = data.getHours();

    if (horaAtual >= 8 && horaAtual <= 18) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}
taAberto(new Date(2015, 1, 1, 12)); // deve retornar true

taAberto(new Date(2015, 1, 1, 2)); // deve retornar false