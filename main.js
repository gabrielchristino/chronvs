class mainChronvs {
  constructor() {
    var appsModuleList;
  }
  getApps() {
    this.appsModuleList = require("Storage").list(/\apjs/);
    return this.appsModuleList;
  }

  showMenu() {
    var appsList = [];
    function loadApp(item, index) {
      var app = new (require(item))();
      appsList.push({app: item, name: app.getName(), icon: app.getIcon()});
    }
    console.log(appsList);
    this.appsModuleList.forEach(loadApp);
  }

}
exports = mainChronvs
