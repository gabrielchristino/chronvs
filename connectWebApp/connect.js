async function onButtonClick() {  
    var caixa = document.getElementById("caixa");
    try {
        navigator.bluetooth.requestDevice({
            filters: [{
              name: 'ESP32'
            }],
            optionalServices: ['battery_service'] // Required to access service later.
          })
          .then(device => {
            // Human-readable name of the device.
            console.log(device.name);
          
            // Attempts to connect to remote GATT Server.
            return device.gatt.connect();
          })
          .then(device => { /* … */ })
          .catch(error => { console.error(error); });
    } catch(error)  {
      caixa.innerHTML += ('<br> Argh! ' + error);
    }
  }