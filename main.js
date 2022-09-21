exports.init = function (){
  D4.set(); // LCD backlight on
  var spi = new SPI();
  spi.setup({mosi:D19 /* sda */, sck:D18 /* scl */});
  return require("ST7789").connect(spi, D16 /* DC */, D5 /* CE */, D23 /* RST */, function() {});
}
