class mainChronvs {
  constructor() {
    var appsName = "";
  }
  getApps() {
    var appsModuleList = require("Storage").list(/\apjs/);
    var appsName = "";
    function loadApp(item, index) {
      var app = new (require(item))();
      appsName += app.getName() + "\n"; 
    }
    appsModuleList.forEach(loadApp);
    console.log(appsName);
    return appsName;
  }
}
exports = mainChronvs
