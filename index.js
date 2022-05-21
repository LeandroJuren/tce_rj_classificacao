import { readFile, readFileSync } from 'fs'
import { Candidato } from './Candidato.js'
import { generateHTML } from './exportHTML.js'
// fs = require('fs')

const rawText = readFileSync(
  'TCE_RJ_2022_listaCantidatosNotas.txt',
  'utf8',
  (err, data) => {
    if (err) throw err
    console.log(data)
  }
)

const candidatosNaoTratados = rawText.split('/')

// console.log(candidatosNaoTratados)

let candidatos = []

candidatosNaoTratados.forEach(i => {
  // console.log('Oh man: ', i)
  const candidato = new Candidato(...i.split(','))
  // console.log(candidato)
  candidatos.push(candidato)
})

candidatos.sort((a, b) => a.NF - b.NF)

// console.log(candidatos)

generateHTML(
  candidatos,
  'Candidatos constantes do 3º Edital do concurso TCE RJ Analista de TI 2022 em ordem de pontuação',
  'Dados constantes da publicacao no edital III de 18/maio/2020 do concurso TCE-RJ Analista de TI pelo Cebraspe minerados e dispostos em ordem classificatoria de acordo com sua pontuação, ainda que provisória.'
)
