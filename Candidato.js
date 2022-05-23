export class Candidato {
  numeroInscricao
  nome
  P1 //nota  final  na  prova  objetiva  de conhecimentos básicos
  P2 //nota final na prova objetiva de conhecimentos específicos
  NFPO //nota final nas provas objetivas
  P3_1 //nota provisória na questão 1 da prova discursiva - valerá até 10,00 pontos
  P3_2 //nota provisória na questão 2 da prova discursiva - valerá até 10,00 pontos
  P3_3 // nota provisória na questão 3 da prova discursiva - valerá até 10,00 pontos
  P3_EC // nota provisória no estudo de caso da prova discursiva - valerá até 30,00 pontos
  NPPD // nota provisória na prova discursiva
  NF // somatório das notas finais (aqui, por enquanto, estamos desconsiderando a nota final na avaliaçãode títulos (NFAT))

  constructor(numeroInscricao, nome, O1, O2, NFPO, D1, D2, D3, Dec) {
    this.numeroInscricao = parseInt(numeroInscricao.trim())
    this.nome = nome.trim()
    this.P1 = parseFloat(O1.trim())
    this.P2 = parseFloat(O2.trim())
    this.NFPO = parseFloat(NFPO.trim())
    this.P3_1 = parseFloat(D1.trim())
    this.P3_2 = parseFloat(D2.trim())
    this.P3_3 = parseFloat(D3.trim())
    this.P3_EC = parseFloat(Dec.trim())
    this.setNFPD(this.P3_1, this.P3_2, this.P3_3, this.P3_EC)
    this.setNF(this.NFPO, this.NPPD)
  }

  setNFPD(D1, D2, D3, Dec) {
    this.NPPD = Math.round((D1 + D2 + D3 + Dec + Number.EPSILON) * 100) / 100
  }

  setNF(NFPO, NFPD) {
    this.NF = Math.round((NFPO + NFPD + Number.EPSILON) * 100) / 100
  }
}
