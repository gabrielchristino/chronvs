async function onButtonClick() {  
    var caixa = document.getElementById("caixa");
    try {
        navigator.bluetooth.requestDevice({
            filters: [{
              name: 'ESP32'
            }],
            optionalServices: [0xBCDE] // Required to access service later.
          })
          .then(device => {
            // Human-readable name of the device.
            console.log(device.name);
            console.log(device);
          
            // Attempts to connect to remote GATT Server.
            return device.gatt.connect();
          })
          .then(server => {
            // Getting Battery Service…
            console.log(server);
            return server.getPrimaryService(0xBCDE);
          })
          .then(service => {
            // Getting Battery Level Characteristic…
            console.log(service);
            return service.getCharacteristic(0xABCD);
          })
          .then(characteristic => {
            // Reading Battery Level…
            const buffer = new ArrayBuffer(8);
            const uint8 = new Uint8Array(buffer);
            uint8.set([1, 2, 3], 3);
            console.log(uint8);
            characteristic.writeValue(uint8);
            return characteristic.readValue();
          })
          .then(value => {
            console.log(value);
          })
          .catch(error => { console.error(error); });
    } catch(error)  {
      caixa.innerHTML += ('<br> Argh! ' + error);
    }
  }