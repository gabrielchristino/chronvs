class screenChronvs {
  constructor() {
    var tela = {};
  }
  connect() {
    D4.reset()
    var spi = new SPI();
    spi.setup({mosi:D19 /* sda */, sck:D18 /* scl */});
    this.tela = require("ST7789").connect(spi, D16 /* DC */, D5 /* CE */, D23 /* RST */, function() {});
    var scale = 1;
    this.tela.setFontCustom( E.toString(require('heatshrink').decompress(atob('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'))),
          32,
          atob("BgYIEA4SDwQHBwgNBAkEBw8IDQ0PDQ4NDg4EBA0NDQ0YEBEQEw8OEhMHCxANFhMTEBMQDg0SDxkODg8HBwcNDA4NDw0PDgcQDwYGDQYZDw4PDwkLCQ8MEwsMCwcHBw0A"),
          23+(this.scale<<8)+(1<<16)
        );
    return this.tela;
  }
}
exports = screenChronvs
