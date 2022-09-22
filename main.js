class mainChronvs {
  constructor() {
    var appsModuleList;
  }
  getApps() {
    appsModuleList = require("Storage").list(/\apjs/);
    return appsModuleList;
  }

  showMenu() {
    var appsList = [];
    function loadApp(item, index) {
      var app = new (require(item))();
      appsList.push({app: item, name: app.getName(), icon: app.getIcon()});
    }
    console.log(appsList);
    appsModuleList.forEach(loadApp);
  }

}
exports = mainChronvs
