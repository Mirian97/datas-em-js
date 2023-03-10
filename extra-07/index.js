function promocaoValida(dataPromocao, dataSolicitada) {
    const fimDaPromocao = dataPromocao.setDate(dataPromocao.getDay() + 30)

    if (+dataSolicitada < +fimDaPromocao && +dataSolicitada < +dataPromocao) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

promocaoValida(new Date(2022, 4, 1, 0), new Date(2022, 4, 20, 23))