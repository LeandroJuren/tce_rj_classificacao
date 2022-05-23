import { createWriteStream } from 'fs'
export function generateHTML(lista, titulo, subtitulo, disclaimer) {
  let h1 = '<h1>' + titulo + '</h1>'
  let p = '<br><p>' + subtitulo + '</p><br>'
  let em = '<br><em>' + disclaimer + '</em><br><hr>'
  let header = '<header>' + h1 + p + em + '</header>'
  let head =
    '<title>' +
    titulo +
    "</title><meta charset='UTF-8'><style>body{background-color:rgb(34, 36, 37); color:rgb(209, 203, 199); font-family: 'Source Sans Pro', sans-serif}</style>"

  const revLista = lista.reverse()
  let linhas = []
  let i = 1
  revLista.forEach(element => {
    let linha =
      '<tr><td><i>' +
      i +
      '</i></td><td>' +
      element.numeroInscricao +
      '</td><td>' +
      element.nome +
      '</td><td>' +
      element.P1 +
      '</td><td>' +
      element.P2 +
      '</td><td>' +
      element.NFPO +
      '</td><td>' +
      element.P3_1 +
      '</td><td>' +
      element.P3_2 +
      '</td><td>' +
      element.P3_3 +
      '</td><td>' +
      element.P3_EC +
      '</td><td>' +
      element.NPPD +
      '</td><td><strong>' +
      element.NF +
      '</strong></td></tr>'
    linhas.push(linha)
    i++
  })

  const tabelaPrincipal =
    '<table><tr><th>Colocação</th><th>Número de inscrição</th>' +
    '<th>Nome</th>' +
    '<th>P1</th>' +
    '<th>P2</th>' +
    '<th>NFPO</th>' +
    '<th>P3.1</th>' +
    '<th>P3.2</th>' +
    '<th>P3.3</th>' +
    '<th>P3.EC</th>' +
    '<th>NPPD</th>' +
    '<th><strong>NF</strong></th></tr>' +
    linhas.join('') +
    '</table>'

  const tabelaKey =
    '<table border=1><tr><th colspam=2>Legenda</th></tr>' +
    '<tr><td>P1</td><td>nota final na prova objetiva de conhecimentos básicos</td></tr>' +
    '<tr><td>P2</td><td>nota final na prova objetiva de conhecimentos específicos</td></tr>' +
    '<tr><td>NFPO</td><td>nota final nas provas objetivas (P1+P2)</td></tr>' +
    '<tr><td>P3.1</td><td>nota provisória na questão 1 da prova discursiva</td></tr>' +
    '<tr><td>P3.2</td><td>nota provisória na questão 2 da prova discursiva</td></tr>' +
    '<tr><td>P3.3</td><td>nota provisória na questão 1 da prova discursiva</td></tr>' +
    '<tr><td>P3.EC</td><td>nota provisória no estudo de caso da prova discursiva</td></tr>' +
    '<tr><td>NPPD</td><td>nota provisória na prova discursiva (P3.1+P3.2+P3.3+P3.EC)</td></tr>' +
    '<tr><td>NF</td><td>nota final (preliminar e não oficial)</td></tr></table><br><hr><br>'

  const body = '<br>' + tabelaKey + tabelaPrincipal + '<br>'

  const document =
    '<!DOCTYPE html>' +
    '<html><head>' +
    head +
    '</head><body><div>' +
    header +
    body +
    "<br> Este documento foi gerado na data de <strong>22/05/2022</strong>, e desenvolvido por <a href='https://github.com/LeandroJuren'>LeandroJuren</a> em algoritmo JavaScript, executado através de Node.js. Visite o repositório <a href='https://github.com/LeandroJuren/tce_rj_classificacao'>aqui</a>." +
    '</div></body></html>'

  // var fs = require('fs')
  var stream = createWriteStream('Resultado_TCE_RJ_2022.html')
  stream.once('open', function (fd) {
    stream.end(document)
  })
}
