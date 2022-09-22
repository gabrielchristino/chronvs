class mainChronvs {
  constructor() {
    var appsModuleList;
    var appsList = [{}];
  }
  getApps() {
    this.appsModuleList = require("Storage").list(/\apjs/);
    return this.appsModuleList;
  }

  showMenu() {
    function loadApp(appName, index) {
      var app = new (require(appName))();
      console.log(appName);
      console.log(app.getName());
      console.log(app.getIcon());
      console.log('');
      if (Array.isArray(this.appsList)) {
        this.appsList.push({appName, name: app.getName(), icon: app.getIcon()});
      }
    }
    this.appsModuleList.forEach(loadApp);

    console.log(this.appsList);
  }

}
exports = mainChronvs
