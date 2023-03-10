const fs = require("fs/promises");

(async function () {
    try {
        const registro = await fs.readFile("registro-de-pessoas.json");

        const objRegistro = JSON.parse(registro);

        objRegistro.sort((a, b) => {
            let data1 = + new Date(a.registered);
            let data2 = + new Date(b.registered);
            return data1 - data2;
        })

        await fs.writeFile("registro-de-pessoas.json", JSON.stringify(objRegistro))

    } catch (erro) {
        console.log({ mensagem: erro.message })
    }

})();