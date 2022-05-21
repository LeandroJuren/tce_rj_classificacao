import { readFile, readFileSync } from 'fs'
import { Candidato } from './Candidato.js'
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

console.log(candidatos)
