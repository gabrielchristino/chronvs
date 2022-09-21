D4.set(); // LCD backlight on
var spi = new SPI();
spi.setup({mosi:D19 /* sda */, sck:D18 /* scl */});
var g = require("ST7789").connect(spi, D16 /* DC */, D5 /* CE */, D23 /* RST */, function() {});

g.clear();
g.setRotation(1);

setWatch(function(){
  g.clear();
  g.drawString("teste",20,20);
  console.log("35");
}, D35, { repeat: true, edge: "falling" });

setWatch(function(){
  g.clear();
  console.log("0");
}, D0, { repeat: true, edge: "falling" });
