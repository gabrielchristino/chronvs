var libscreen = new (require("https://gabrielchristino.github.io/chronvs/libscreen.js"))();

var tela = this.libscreen.connect();
var utils = new (require("libutils"))(this.tela, this.libscreen);

var main = new (require("libmain"))(this.tela, this.utils);
var app = this.main;

setWatch(function(e){
  if(e.time-e.lastTime > 2) {
    this.app = this.app.onClickBtn27();
  } else if(e.time-e.lastTime > 0.5) {
    this.app = this.app.onClickBtn12();
    this.app.onInit();
  } else {
    this.app = this.app.onClickBtn0();
  }
}, D0, { repeat: true, edge: "rising", debounce:30 });

setWatch(function(e){
  if(e.time-e.lastTime > 2) {
    this.app = this.app.onClickBtn27();
  } else if(e.time-e.lastTime > 0.5) {
    this.app = this.app.onClickBtn21();
    this.app.onInit();
  } else {
    this.app = this.app.onClickBtn35();
  }
}, D35, { repeat: true, edge: "rising", debounce:30 });

setTimeout(() => {
  this.utils.setFontA();
  this.tela.setRotation(1);
  this.tela.clear();
  this.utils.getTime();
}, 10);

var page = "<html><body>teste</body></html>";

function onPageRequest(req, res) {
  var a = url.parse(req.url, true);
  var data = "";
  var postData = {};
  req.on('data', function(d) { data += d; });
  req.on('end', function() {
    postData = JSON.parse(data);
  });
  if (a.pathname == "/notify") {
    utils.clearScreen();
    utils.drwStr(postData.title + "\n" + postData.text ,0,0);
  }
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(page);
}

function criarServer() {
  require("http").createServer(onPageRequest).listen(80);
}

var wifi = require("Wifi");
wifi.connect("tests", {password:"tests123"}, criarServer);