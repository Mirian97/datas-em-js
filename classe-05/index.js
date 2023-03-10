function taAberto(data) {
    const horaAtual = data.getHours();
    const diaDaSemana = data.getDay();

    if (horaAtual < 8 || horaAtual > 18 || diaDaSemana === 0 || (diaDaSemana === 6 && horaAtual < 8 || horaAtual > 12)) {
        return console.log(false);
    } else {
        return console.log(true);
    }
}

taAberto(new Date(2021, 3, 25, 12)); // deve retornar false, pois é um domingo
taAberto(new Date(2021, 3, 26, 12)); // deve retornar true, pois é uma segunda
taAberto(new Date(2021, 3, 26, 7, 59)); // deve retornar false, pois é muito cedo (7h59)
taAberto(new Date(2021, 3, 24, 9, 30)); // deve retornar true, pois é sábado de manhã (9h30)