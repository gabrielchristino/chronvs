class mainChronvs {
  constructor() {
    var appsModuleList;
    // var appsList = [{}];
  }
  getApps() {
    this.appsModuleList = require("Storage").list(/\apjs/);
    return this.appsModuleList;
  }

  showMenu() {
    var appsList = new Array();
    function loadApp(appName, index) {
      var app = new (require(appName))();
      console.log(appName);
      console.log(app.getName());
      console.log(app.getIcon());
      console.log('debug');
      if (Array.isArray(appsList)) {
        appsList.push({appName, name: app.getName(), icon: app.getIcon()});
        console.log('passou aqui');
      }
    }
    this.appsModuleList.forEach(loadApp);

    console.log(appsList);
  }

}
exports = mainChronvs
