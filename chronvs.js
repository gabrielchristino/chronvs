D4.set(); // LCD backlight on
var spi = new SPI();
spi.setup({mosi:D19 /* sda */, sck:D18 /* scl */});
var tela = require("ST7789").connect(spi, D16 /* DC */, D5 /* CE */, D23 /* RST */, function() {});

var mainChronvs = new (require("main"))(this.tela);

this.tela.setRotation(1);
this.tela.clear();

var appsName = mainChronvs.getApps();
var app = new (require("answapjs"))(this.tela);

setWatch(function(){
  console.log("1");
  app.onClickBtn35();
  //mainChronvs.move(-1);
}, D35, { repeat: true, edge: "falling", debounce:30 });

setWatch(function(){
  console.log("2");
  app.onClickBtn0();
  //mainChronvs.move(1);
}, D0, { repeat: true, edge: "falling", debounce:30 });

/*setWatch(function(){
  //app.onClickBtn0();
  mainChronvs.open();
}, D12, { repeat: true, edge: "falling", debounce:20 });*/