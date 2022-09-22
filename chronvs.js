var g = new (require("https://gabrielchristino.github.io/chronvs/screenConfig.js"))();
var mainChronvs = new (require("https://gabrielchristino.github.io/chronvs/main.js"))();

g.connect();
g.setFont();
var tela = g.getScreen();
tela.clear();
tela.setRotation(1);

var appsName = mainChronvs.getApps();
var app = new (require("answapjs"))();
setWatch(function(){
  D4.set();
  tela.clear();
  //tela.drawString(appsName,0,0);
  mainChronvs.showMenu();
  app.onClickBtn35();
}, D35, { repeat: true, edge: "falling" });

setWatch(function(){
  tela.clear();
  D4.reset();
  app.onClickBtn0();
}, D0, { repeat: true, edge: "falling" });