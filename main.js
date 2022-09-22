class mainChronvs {
  constructor(tela) {
    var appsModuleList;
    var appsList = new Array();
    var selectedItem = -1;
    var currentItem = 0;
    var tela = tela;
  }
  getApps() {
    this.appsModuleList = require("Storage").list(/\apjs/);
    return this.appsModuleList;
  }
  showMenu() {
    function loadApp(appName, index) {
      var app = new (require(appName))();
      this.appsList.push({appName, name: app.getName(), icon: app.getIcon()});
    }
    this.appsModuleList.forEach(loadApp);
  }

}
exports = mainChronvs
