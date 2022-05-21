import { createWriteStream } from 'fs'
export function generateHTML(lista, titulo, subtitulo) {
  let h1 = '<h1>' + titulo + '</h1>'
  let p = '<br><p>' + subtitulo + '</p><br><hr><br>'
  let header = '<header>' + h1 + p + '</header>'
  let head =
    '<title>' + titulo + '</title><meta charset="UTF-8"><style></style>'

  const revLista = lista.reverse()
  let linhas = []
  let i = 1
  lista.forEach(element => {
    let linha =
      '<tr><td><i>' +
      i +
      '</i></td><td>' +
      element.numeroInscricao +
      '</td><td>' +
      element.nome +
      '</td><td>' +
      element.NF +
      '</td></tr>'
    linhas.push(linha)
    i++
  })

  const tabela =
    '<table><tr><th>Colocação</th><th>Número de inscrição</th><th>Nome</th><th>Nota fianl</th></tr>' +
    linhas.join('') +
    '</table>'

  const body = '<br>' + tabela + '<br>'

  const document =
    '<!DOCTYPE html>' +
    '<html><head>' +
    head +
    '</head><body><div>' +
    header +
    body +
    '</div></body></html>'

  // var fs = require('fs')
  var stream = createWriteStream('Resultado_TCE_RJ_2022.html')
  stream.once('open', function (fd) {
    stream.end(document)
  })
}
