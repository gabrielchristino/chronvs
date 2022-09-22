class mainChronvs {
  constructor(tela) {
    var appsModuleList;
    var selectedItem = -1;
    var currentItem = 0;
    var appsList = new Array();
    var tela = tela;
  }
  getApps() {
    this.appsModuleList = require("Storage").list(/\apjs/);
    return this.appsModuleList;
  }
  showMenu() {
    var yPos = 0;
    function loadApp(appName, index) {
      var app = new (require(appName))();
      this.appsList.push({appName, name: app.getName(), icon: app.getIcon()});
      if (this.currentItem == index) this.tela.drawRect(0, yPos, 239, 25);
      this.tela.drawString(app.getName(), 5, yPos+1);
      yPos += 25;
    }
    this.appsModuleList.forEach(loadApp);
  }
  move(index) {
    this.currentItem+=index;
  }
}
exports = mainChronvs
