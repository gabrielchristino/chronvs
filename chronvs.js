var g = new (require("https://gabrielchristino.github.io/chronvs/screenConfig.js"))();

g.connect();
g.setFont();
var tela = g.getScreen();

var mainChronvs = new (require("https://gabrielchristino.github.io/chronvs/main.js"))(tela);

tela.clear();
tela.setRotation(1);

var appsName = mainChronvs.getApps();
var app = new (require("answapjs"))(tela);

setWatch(function(){
  mainChronvs.move(-1);
  //mainChronvs.showMenu();
  //app.onClickBtn35();
}, D35, { repeat: true, edge: "falling" });

setWatch(function(){
  //app.onClickBtn0();
  mainChronvs.move(1);
}, D0, { repeat: true, edge: "falling" });