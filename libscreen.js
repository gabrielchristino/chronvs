var tela = {};
var scale = 1;
class screenChronvs {
  constructor() {
    this.tela = {};
    this.scale = 1; 
  }
  connect() {
    D4.reset()
    var spi = new SPI();
    spi.setup({mosi:D19 /* sda */, sck:D18 /* scl */});
    this.tela = require("https://gabrielchristino.github.io/chronvs/ST7789.js").connect(spi, D16 /* DC */, D5 /* CE */, D23 /* RST */, function() {});
    this.tela.clear();
    return this.tela;
  }
}
exports = screenChronvs
