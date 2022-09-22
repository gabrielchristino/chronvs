class mainChronvs {
  constructor() {
    var appsModuleList;
    var appsList = [];
  }
  getApps() {
    this.appsModuleList = require("Storage").list(/\apjs/);
    return this.appsModuleList;
  }

  showMenu() {
    function loadApp(item, index) {
      var app = new (require(item))();
      console.log(item);
      console.log(app.getName());
      console.log(app.getIcon());
      console.log('');
    }
    this.appsModuleList.forEach(loadApp);
  }

}
exports = mainChronvs
