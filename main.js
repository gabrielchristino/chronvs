class mainChronvs {
  constructor() {
    var appsName = "";
    var appsModuleList;
  }
  getApps() {
    appsModuleList = require("Storage").list(/\apjs/);
    return appsModuleList;
  }

  showMenu() {
    function loadApp(item, index) {
      var app = new (require(item))();
      var appName = app.getName(); 
      console.log(appName);
    }
    appsModuleList.forEach(loadApp);
  }

}
exports = mainChronvs
