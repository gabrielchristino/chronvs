class mainChronvs {
  constructor() {
    var appsName = "";
  }
  getApps() {
    var appsModuleList = require("Storage").list(/\apjs/);
    var appsName = "";
    function loadApp(item, index) {
      appsName += require(item).getAppProps().name + "\n"; 
    }
    appsModuleList.forEach(loadApp);
    return appsName;
  }
}
exports = mainChronvs
