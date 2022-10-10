async function onButtonClick() {  
    var caixa = document.getElementById("caixa");
    try {
        navigator.bluetooth.requestDevice({
            filters: [{
              manufacturerData: [{
                companyIdentifier: 0x0590,
                dataPrefix: new Uint8Array([0x01, 0x02])
              }]
            }],
            optionalServices: ['battery_service'] // Required to access service later.
          })
          .then(device => {
            // Human-readable name of the device.
            console.log(device.name);
            console.log(device);
          
            // Attempts to connect to remote GATT Server.
            return device.gatt.connect();
          })
          .then(device => { /* … */ })
          .catch(error => { console.error(error); });
    } catch(error)  {
      caixa.innerHTML += ('<br> Argh! ' + error);
    }
  }