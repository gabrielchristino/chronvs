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
  setFontA() {
    this.tela.setFontCustom( E.toString(require('heatshrink').decompress(atob('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'))),
      32,
      atob("BgYIEA4SDwQHBwgNBAkEBw8IDQ0PDQ4NDg4EBA0NDQ0YEBEQEw8OEhMHCxANFhMTEBMQDg0SDxkODg8HBwcNDA4NDw0PDgcQDwYGDQYZDw4PDwkLCQ8MEwsMCwcHBw0A"),
      23+(this.scale<<8)+(1<<16)
    );
  }
  setFontB() {
    this.tela.setFontCustom(E.toString(require('heatshrink').decompress(atob('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'))),
    46,
    atob("Gig3Nzc3Nzc3Nzc3GA=="),
    98+(scale<<8)+(1<<16)
  );
  }
}
exports = screenChronvs
