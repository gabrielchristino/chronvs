var g = new (require("https://gabrielchristino.github.io/chronvs/screenConfig.js"))();

g.connect();
g.setFont();
var tela = g.getScreen();

var mainChronvs = new (require("main"))(tela);

tela.setRotation(1);
tela.clear();
tela.clear();

var appsName = mainChronvs.getApps();
var app = new (require("answapjs"))(tela);

setWatch(function(){
  console.log("1");
  //app.onClickBtn35();
  mainChronvs.move(-1);
}, D35, { repeat: true, edge: "falling", debounce:20 });

setWatch(function(){
  console.log("2");
  //app.onClickBtn0();
  mainChronvs.move(1);
}, D0, { repeat: true, edge: "falling", debounce:20 });

/*setWatch(function(){
  //app.onClickBtn0();
  mainChronvs.open();
}, D12, { repeat: true, edge: "falling", debounce:20 });*/