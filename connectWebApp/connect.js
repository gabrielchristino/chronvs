function onDisconnected(event) {
  // Object event.target is Bluetooth Device getting disconnected.
  console.log('> Bluetooth Device disconnected');
}

async function onButtonClick() {  
  var bluetoothDevice;
    var caixa = document.getElementById("caixa");
    try {
        navigator.bluetooth.requestDevice({
            filters: [{
              name: 'ESP32'
            }],
            optionalServices: [0xBCDE] // Required to access service later.
          })
          .then(device => {
            bluetoothDevice = device;
            bluetoothDevice.addEventListener('gattserverdisconnected', onDisconnected);
            return bluetoothDevice.gatt.connect();
          })
          .then(server => server.getPrimaryService(0xBCDE))
          .then(service => service.getCharacteristic(0xABCD))
          .then(characteristic => characteristic.getDescriptor('gatt.characteristic_user_description'))
          .then(descriptor => {
            const encoder = new TextEncoder('utf-8');
            const userDescription = encoder.encode('teste');
            return descriptor.writeValue(userDescription);
          })
          /*.then(characteristic => characteristic.readValue())
          .then(valor => {
            const decoder = new TextDecoder('utf-8');
            console.log(`${decoder.decode(valor)}`);
            bluetoothDevice.gatt.disconnect();
          })*/
          .catch(error => { console.error(error); });
    } catch(error)  {
      caixa.innerHTML += ('<br> Argh! ' + error);
    }
  }