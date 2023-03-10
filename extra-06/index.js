function promocaoValida(dataPromocao, dataSolicitada) {

    //const fimDaPromocao = dataPromocao.setDate(dataPromocao.getDate() + 1);

    const fimDaPromocao = dataPromocao.setHours(dataPromocao.getHours() + 24)

    if (+dataSolicitada < +fimDaPromocao && +dataSolicitada < +dataPromocao) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}

promocaoValida(new Date(2022, 4, 1, 0), new Date(2022, 4, 2, 23))