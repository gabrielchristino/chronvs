var libscreen = new (require("https://gabrielchristino.github.io/chronvs/libscreen.js"))();

var tela = this.libscreen.connect();
var utils = new (require("libutils"))(this.tela, this.libscreen);

var main = new (require("libmain"))(this.tela, this.utils);
var app = this.main;

setWatch(function(e){
  if(e.time-e.lastTime > 1) {
    this.app = this.app.onClickBtn12();
    this.app.onInit();
  } else {
    this.app = this.app.onClickBtn0();
  }
}, D0, { repeat: true, edge: "rising", debounce:30 });

setWatch(function(e){
  if(e.time-e.lastTime > 1) {
    this.app = this.app.onClickBtn21();
    this.app.onInit();
  } else {
    this.app = this.app.onClickBtn35();
  }
}, D35, { repeat: true, edge: "rising", debounce:30 });

setWatch(function(e){
  if(e.time-e.lastTime > 1) {
    console.log("long");
  } else {
    this.app = this.app.onClickBtn12();
    this.app.onInit();
  }
}, D12, { repeat: true, edge: "rising", debounce:20 });

setWatch(function(e){
  if(e.time-e.lastTime > 1) {
    console.log("long");
  } else {
    console.log("short");
    this.app.onInit();
  }
}, D21, { repeat: true, edge: "rising", debounce:20 });

setTimeout(() => {
  this.utils.setFontA();
  this.tela.setRotation(1);
  this.tela.clear();
}, 100);
