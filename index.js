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
  'Resultado provisório do concurso TCE RJ - Analista de TI 2022',
  "Dados constantes do EDITAL Nº 3 – TCE/RJ, DE 17 DE MAIO DE 2022, do VI CONCURSO PÚBLICO PARA O PROVIMENTO DE VAGAS E A FORMAÇÃO DE CADASTRO DE RESERVA NO CARGO DE ANALISTA DE CONTROLE EXTERNO – ÁREA ORGANIZACIONAL –  ESPECIALIDADE: TECNOLOGIA DA INFORMAÇÃO para o TRIBUNAL DE CONTAS DO ESTADO DO RIO DE JANEIRO (TCE/RJ), realizado pelo Cebraspe (disponível neste link: <a href='https://cdn.cebraspe.org.br/concursos/TCE_RJ_21_ANALISTA/arquivos/ED_3_2021_TCE_RJ_ANALISTA_RES_FINAL_OBJ_PROV_DISC.PDF'>https://cdn.cebraspe.org.br/concursos/TCE_RJ_21_ANALISTA/arquivos/ED_3_2021_TCE_RJ_ANALISTA_RES_FINAL_OBJ_PROV_DISC.PDF</a>), minerados e dispostos em ordem classificatória de acordo com sua pontuação.",
  '<b>Esta é uma publicação não oficial e preliminar - sujeita a alterações. </b><br><br> A AVALIAÇÃO DE TÍTULOS (NFAT) ainda está para ocorrer. Portanto, a mesma não está sendo considrada aqui.  <br>'
)
