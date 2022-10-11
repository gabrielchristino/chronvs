NRF.setAdvertising({}, {name:"ESP32"});
NRF.setServices({
  '0xBCDE' : {
    '0xABCD' : {
      value : "Hello", // optional
      broadcast : true, // optional, default is false
      readable : true,   // optional, default is false
      writable : true,   // optional, default is false
      notify : true,   // optional, default is false
      indicate : true,   // optional, default is false
      description: "My Characteristic",  // optional, default is null,
      onWrite : function(evt) { // optional
        console.log("Got ", evt.data); // an ArrayBuffer
      },
      onWriteDesc : function(evt) { // optional - called when the 'cccd' 
        console.log("Notifications enabled = ", evt.data[0]&1);
      }
    }
  }
});

function handleCharacteristicValueChanged(event) {
  const value = event.target.value;
  console.log('Received ' + value);
  // TODO: Parse Heart Rate Measurement value.
  // See https://github.com/WebBluetoothCG/demos/blob/gh-pages/heart-rate-sensor/heartRateSensor.js
}

async function onButtonClick() {  
    var caixa = document.getElementById("caixa");
    try {
        navigator.bluetooth.requestDevice({
            filters: [{
              name: 'ESP32'
            }],
            optionalServices: [0xBCDE] // Required to access service later.
          })
          .then(device => device.gatt.connect())
          .then(server => server.getPrimaryService(0xBCDE))
          .then(service => service.getCharacteristic(0xABCD))
          .then(characteristic => characteristic.readValue())
          .then(valor => {
            console.log(valor);
          })
          .catch(error => { console.error(error); });
    } catch(error)  {
      caixa.innerHTML += ('<br> Argh! ' + error);
    }
  }