var g = new (require("https://gabrielchristino.github.io/chronvs/screenConfig.js"))();
var mainChronus = new (require("https://gabrielchristino.github.io/chronvs/main.js"))();

g.connect();
g.setFont();
var tela = g.getScreen();
tela.clear();
tela.setRotation(1);

var appsName = mainChronus.getApps();

setWatch(function(){
  D4.set();
  tela.clear();
  tela.drawString(appsName,0,0);
  print(require("answapjs").get());
}, D35, { repeat: true, edge: "falling" });

setWatch(function(){
  tela.clear();
  D4.reset();
}, D0, { repeat: true, edge: "falling" });