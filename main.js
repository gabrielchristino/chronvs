class mainChronvs {
  constructor() {
    var appsList = [];
    var appsModuleList;
  }
  getApps() {
    appsModuleList = require("Storage").list(/\apjs/);
    return appsModuleList;
  }

  showMenu() {
    function loadApp(item, index) {
      var app = new (require(item))();
      appsList.push([item, app.getName(), app.getIcon()]); 
      console.log(appsList);
    }
    appsModuleList.forEach(loadApp);
  }

}
exports = mainChronvs
