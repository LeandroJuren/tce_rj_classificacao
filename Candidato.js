export class Candidato {
  numeroInscricao
  nome
  O1 //nota  final  na  prova  objetiva  de conhecimentos básicos
  O2 //nota final na prova objetiva de conhecimentos específicos
  NFPO //nota final nas provas objetivas
  D1 //nota provisória na questão 1 da prova discursiva - valerá até 10,00 pontos
  D2 //nota provisória na questão 2 da prova discursiva - valerá até 10,00 pontos
  D3 // nota provisória na questão 3 da prova discursiva - valerá até 10,00 pontos
  Dec // nota provisória no estudo de caso da prova discursiva - valerá até 30,00 pontos
  NFPD // nota provisória na prova discursiva
  NF // somatório das notas finais (aqui, por enquanto, estamos desconsiderando a nota final na avaliaçãode títulos (NFAT))

  constructor(numeroInscricao, nome, O1, O2, NFPO, D1, D2, D3, Dec) {
    this.numeroInscricao = parseInt(numeroInscricao.trim())
    this.nome = nome.trim()
    this.O1 = parseFloat(O1.trim())
    this.O2 = parseFloat(O2.trim())
    this.NFPO = parseFloat(NFPO.trim())
    this.D1 = parseFloat(D1.trim())
    this.D2 = parseFloat(D2.trim())
    this.D3 = parseFloat(D3.trim())
    this.Dec = parseFloat(Dec.trim())
    this.setNFPD(this.D1, this.D2, this.D3, this.Dec)
    this.setNF(this.NFPO, this.NFPD)
  }

  setNFPD(D1, D2, D3, Dec) {
    this.NFPD = Math.round((D1 + D2 + D3 + Dec + Number.EPSILON) * 100) / 100
  }

  setNF(NFPO, NFPD) {
    this.NF = Math.round((NFPO + NFPD + Number.EPSILON) * 100) / 100
  }
}
