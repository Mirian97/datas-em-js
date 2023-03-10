const { format } = require("date-fns");
const pt = require('date-fns/locale/pt-BR')

function formatarDataA(data) {
    const dataFormatada = format(data, "dd 'de' MMMM 'de' yyyy", { locale: pt });
    console.log(dataFormatada.toLowerCase());
}
formatarDataA(new Date(2020, 9, 5));


function formatarDataB(data) {
    const dataFormatada = format(data, "dd/MM/yyyy");
    console.log(dataFormatada);
}
formatarDataB(new Date(2020, 9, 5))


function formatarDataC(data) {
    const dataFormatada = format(data, "d MMM", { locale: pt });
    console.log(dataFormatada.toLowerCase());
}
formatarDataC(new Date(2020, 9, 5))


function formatarDataD(data) {
    const dataFormatada = format(data, "dd MMM yyyy", { locale: pt });
    console.log(dataFormatada.toLowerCase());
}
formatarDataD(new Date(2020, 9, 5))


function formatarDataE(data) {
    const dataFormatada = format(data, "dd 'de' MMM 'de' yyyy", { locale: pt });
    console.log(dataFormatada.toLowerCase());
}
formatarDataE(new Date(2020, 9, 5))


function formatarDataF(data) {
    const dataFormatada = format(data, "dd/MMM", { locale: pt });
    console.log(dataFormatada.toLowerCase());
}
formatarDataF(new Date(2020, 9, 5))