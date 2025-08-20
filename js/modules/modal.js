export default class Modal {
  constructor(btnAbrir, btnFechar, container) {
    this.botaoAbrir = document.querySelector(btnAbrir);
    this.botaoFechar = document.querySelector(btnFechar);
    this.containerModal = document.querySelector(container);

    //bind this ao callback para fazer referencia ao obj da classe
    this.evToggleModal = this.evToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  evToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal(event);
    }
  }
  addModalEv() {
    this.botaoAbrir.addEventListener("click", this.evToggleModal);
    this.botaoFechar.addEventListener("click", this.evToggleModal);
    this.containerModal.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEv();
    }
    return this;
  }
}
