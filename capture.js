const mllp = require('./node_modules/mllp-node/index');
const fs = require('fs');
const parser = require('parsehl7');
const ip = '127.0.0.1';
const localIp = '127.0.0.1';
// const localIp = '10.10.1.7';

// Setup server
const moment = require('moment');
const date = moment().format('YYYYMMDDhhmmss');

const server = new mllp.MLLPServer(localIp, 5000);
//const server = new mllp.MLLPServer(localIp, 495);
console.log('server listening at: ' + localIp);

// Subscribe to inbound messages
server.on('hl7', function (data) {
  console.log('received payload:', data);

  // No escribir nada si viene vacio al inicio...
  if (data === 0) {
    console.log('empty');
  } else {
    // ?? Use to store captured content to file
    let string = data;

    function replaceAll(string, search, replace) {
      return string.split(search).join(replace);
    }

    data = replaceAll(data, 'GLUCOSA POINTE', 'GLUC');
    data = replaceAll(data, 'ACIDO URICO POINTE', 'URI');
    data = replaceAll(data, 'COLESTEROL POINTE', 'COL');
    data = replaceAll(data, 'TRIGLICERIDOS POINTE', 'TRIG');
    data = replaceAll(data, 'ALBUMINA POINTE', 'ALB');
    data = replaceAll(data, 'BILIRRUBINA TOTAL POINTE', 'BT');
    data = replaceAll(data, 'BILIRRUNINA DIRECTA POINTE', 'BD');
    data = replaceAll(data, 'CALCIO ARZENAZO POINTE', 'CAL');
    data = replaceAll(data, 'FOSFORO INORGANICO POINTE', 'PHOS');
    data = replaceAll(data, 'DESHIDROGINASA LACTICA POINTE', 'LD');
    data = replaceAll(data, 'GAMMA GLUTAMIL TRASFERASA POINTE', 'GGT');
    data = replaceAll(data, 'TGP POINTE', 'ALT');
    data = replaceAll(data, 'TGO POINTE', 'AST');
    data = replaceAll(data, 'FOSFATASA ALCALINA POINTE', 'ALK');
    data = replaceAll(data, 'BUN POINTE', 'BUN');
    data = replaceAll(data, 'CREATININA POINTE', 'CREA');
    data = replaceAll(data, 'MAGNESIO POINTE', 'MG');
    data = replaceAll(data, 'HDL FAST', 'HDL');
    data = replaceAll(data, 'LDL', 'LDL');
    data = replaceAll(data, 'REL A/G', 'R A/G');
    data = replaceAll(data, 'GLOB', 'GLOB');
    data = replaceAll(data, 'BI', 'BI');
    data = replaceAll(data, 'LT', 'LT');
    data = replaceAll(data, 'VLDL', 'VLDL');
    data = replaceAll(data, 'PROTEINAS TOTALES POINTE', 'PT');
    data = replaceAll(data, 'UREA', 'UREA');

    const head = `MSH|^~&|Mindray|BS-200|||20200427140420||ORU^R01|79|P|2.3.1||||0||ASCII|||`;
    let newData = data.substring(61, string.length);
    data = head + newData;

    let randomNumber = Math.floor(Math.random() * 1000);
    console.log(randomNumber);
    let path =
      __dirname + '/output/' + 'ID' + date + '_' + randomNumber + '.txt';
    let pathJSON =
      __dirname + '/output/' + 'ID' + date + '_' + randomNumber + '.json';
    // write plain data file
    fs.writeFile(path, data, function (err) {
      fs.writeFile(pathJSON, stringed, (err) => {
        if (err) throw err;
        console.log('Data written to file');
      });
      if (err) {
        return console.log(err);
      }
    });

    // convert to JSON
    let message = data;
    const segments = parser.parseMessageIntoSegments(message);
    // console.log('los segmentos');
    // console.log(segments);
    // Human readable JSON
    let stringed = JSON.stringify(segments, null, 2);
    console.log(stringed);
    console.log(
      stringed[3].fields[4],
      stringed[3].fields[5],
      stringed[3].fields[6]
    );
    console.log(
      stringed[4].fields[4],
      stringed[4].fields[5],
      stringed[4].fields[6]
    );

    server.send('10.10.1.74', 4000, data, function (err, ackData) {
      // async callback code here
    });

    // let itemsToPush = [stringed.[3].fields[4], stringed[3].fields[5], stringed[3].fields[6]];
  }
});

// Send outbound messages

// console.log(
//   array[3].fields[4] + ' ' + array[3].fields[5] + ' ' + array[3].fields[6]
// );
