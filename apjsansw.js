class appChronvs {
  constructor(tela, utils) {
    this.tela = tela;
    this.utils = utils;
  }
  onInit() {
    this.utils.clearScreen();
    this.utils.drwStr("resposta",0,0);
  }
  getName() {
    return 'Resposta';
  }
  getIcon() {
    return atob("ABYWwwD//27TzuMOyy3sTtOu287CAAEkkkkiQAAAEkkkkkSSQAAkkkkkiSSWAEkkkkkSSS2wEkkkkiSSW2wkkkAkSQAG2JkkkAiSAQGxNkkkAiSA2BJtkkkASSAABNtkkkASSwAJtrkkiASW2ANtbkkSAS22AtrbkiSAG2xAtbbkSQAA2JArbbiSQWAxNAbbbSSQGAJtAbb/SSQABNtAbf/CS2xJtrbb/4CW2xNtbbf/4A22Jtrbb//AAGxNtbbf/4AAABNrbbf4AAA=");
  }
  onClickBtn35() {
    this.onInit();
    this.utils.drwStr("1234",0,30);
    return this;
  }
  onClickBtn0() {
    this.onInit();
    this.utils.drwStr("44",0,30);
    return this;
  }
  onClickBtn12() {
    return this.utils.getMain();
  }
  onClickBtn21() {
    return this.utils.getMain();
  }
  onClickBtn27() {
    return this.utils.lockClock();
  }
}
exports = appChronvs