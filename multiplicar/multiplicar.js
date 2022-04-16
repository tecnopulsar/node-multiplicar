const fs = require("fs");

const colors = require('colors');


let listarTabla = (base , limite=10 ) => {

        console.log('=================================='.green);
        console.log(`====== Tabla del ${base} ===============`.green);
        console.log('=================================='.green);

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        } 
        console.log(data);      
    }


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La Base elegida ${ base } no es un numero`);
            return;
        }
        let data = "";
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n `;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt `, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${ base }.txt `);
        });
    });
};

module.exports = {
    crearArchivo,
    listarTabla,
};