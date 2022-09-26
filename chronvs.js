var tela = new (require("https://gabrielchristino.github.io/chronvs/libscreen.js"))().connect();
var utils = new (require("libutils"))(this.tela);

var main = new (require("libmain"))(this.tela, this.utils);
var app = this.main;

this.tela.setRotation(1);
this.tela.clear();
this.app.onInit();

setWatch(function(){
  this.app = this.app.onClickBtn0();
}, D12, { repeat: true, edge: "falling", debounce:30 });

setWatch(function(){
  this.app = this.app.onClickBtn35();
}, D35, { repeat: true, edge: "falling", debounce:30 });

setWatch(function(){
  this.app = this.app.onClickBtn12();
  this.app.onInit();
}, D0, { repeat: true, edge: "falling", debounce:20 });