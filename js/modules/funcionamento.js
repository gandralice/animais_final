export default class Funcionamento {
  constructor(funcionamento) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = "aberto";
  }

  dadosFuncionamento() {
    this.diasSemana = funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = funcionamento.dataset.horario.split(",").map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = dataAgora.getDay();
    this.horarioAgora = dataAgora.getHours();
  }

  dadosAberto() {
    const semanaAberto = this.diasSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto =
      this.horarioAgora >= this.horarioSemana[0] &&
      this.horarioAgora < this.horarioSemana[1];
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.dadosAberto()) funcionamento.classList.add(this.activeClass);
  }

  init() {
    if (this.funcionamentos) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
