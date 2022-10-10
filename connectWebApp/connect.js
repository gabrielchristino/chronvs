async function onButtonClick() {
    let filters = [];
  
    let filterName = 'ESP32';
    if (filterName) {
      filters.push({name: filterName});
    }
  
    /*let filterNamePrefix = document.querySelector('#namePrefix').value;
    if (filterNamePrefix) {
      filters.push({namePrefix: filterNamePrefix});
    }*/
  
    let options = {};
    //options.acceptAllAdvertisements = true;
    options.filters = filters;
    /*if (document.querySelector('#allAdvertisements').checked) {
      options.acceptAllAdvertisements = true;
    } else {
      options.filters = filters;
    }*/
  
    var caixa = document.getElementById("caixa");
    try {
      caixa.innerHTML += ('Requesting Bluetooth Scan with options: ' + JSON.stringify(options));
      const scan = await navigator.bluetooth.requestLEScan(options);
      caixa.innerHTML +=
      caixa.innerHTML += ('Scan started with:');
      caixa.innerHTML += (' acceptAllAdvertisements: ' + scan.acceptAllAdvertisements);
      caixa.innerHTML += (' active: ' + scan.active);
      caixa.innerHTML += (' keepRepeatedDevices: ' + scan.keepRepeatedDevices);
      caixa.innerHTML += (' filters: ' + JSON.stringify(scan.filters));
  
      navigator.bluetooth.addEventListener('advertisementreceived', event => {
        caixa.innerHTML += ('Advertisement received.');
        caixa.innerHTML += ('  Device Name: ' + event.device.name);
        caixa.innerHTML += ('  Device ID: ' + event.device.id);
        caixa.innerHTML += ('  RSSI: ' + event.rssi);
        caixa.innerHTML += ('  TX Power: ' + event.txPower);
        caixa.innerHTML += ('  UUIDs: ' + event.uuids);
        event.manufacturerData.forEach((valueDataView, key) => {
          logDataView('Manufacturer', key, valueDataView);
        });
        event.serviceData.forEach((valueDataView, key) => {
          logDataView('Service', key, valueDataView);
        });
      });
  
      setTimeout(stopScan, 10000);
      function stopScan() {
        caixa.innerHTML += ('Stopping scan...');
        scan.stop();
        caixa.innerHTML += ('Stopped.  scan.active = ' + scan.active);
      }
    } catch(error)  {
      caixa.innerHTML += ('Argh! ' + error);
    }
  }
  
  /* Utils */
  
  const logDataView = (labelOfDataSource, key, valueDataView) => {
    const hexString = [...new Uint8Array(valueDataView.buffer)].map(b => {
      return b.toString(16).padStart(2, '0');
    }).join(' ');
    const textDecoder = new TextDecoder('ascii');
    const asciiString = textDecoder.decode(valueDataView.buffer);
    caixa.innerHTML += (`  ${labelOfDataSource} Data: ` + key +
        '\n    (Hex) ' + hexString +
        '\n    (ASCII) ' + asciiString);
  };