class mainChronvs {
  constructor() {
    var appsName = "";
  }
  getApps() {
    var appsModuleList = require("Storage").list(/\apjs/);
    var appsName = "";
    function loadApp(item, index) {
      console.log(item);
      var app = new (require(item))();
      appsName += app.getName() + "\n"; 
    }
    appsModuleList.forEach(loadApp);
    return appsName;
  }
}
exports = mainChronvs
