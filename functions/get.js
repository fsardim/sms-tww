const http = require('request');
const API = require('../system_files/chaveAPI');

let getSMS = (idmsg, numero, mensagem) => {
    const url = `http://webservices2.twwwireless.com.br/reluzcap/wsreluzcap.asmx/EnviaSMS?NumUsu=${API.SMS.numUsu}&Senha=${API.SMS.senha}&SeuNum=${idSMS}&Celular=${numero}&Mensagem=${mensagem}`;
    http.get(url)
        .on('response', response => {
            console.log(`response: ${JSON.stringify(response)}`);
        })
        .on('error', error => {
            console.log(`error: ${JSON.stringify(error)}`);
        })
        .on('body', body =>{
            console.log(`body: ${JSON.stringify(body)}`);
        })

}
module.exports = getSMS;
