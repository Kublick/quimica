const mllp = require('./node_modules/mllp-node/index');
const fs = require('fs');
const parser = require('parsehl7');
const axios = require('axios');

// Setup server
let data = '';
const server = new mllp.MLLPServer('167.86.104.3/', 5000);
//const server = new mllp.MLLPServer(localIp, 495);
// console.log('server listening at: ' + localIp);

// Subscribe to inbound messages
server.on('hl7', function (data) {
  console.log('received payload:', data);

  // No escribir nada si viene vacio al inicio...
  if (data === 0) {
    console.log('empty');
  } else {
    // convert to JSON
    let message = data;
    const segments = parser.parseMessageIntoSegments(message);
    console.log('los segmentos');
    console.log(segments);
    console.log('cuantos', segments.length);

    let testId = segments[1].fields[5];

    let forData = [];
    for (let i = 0; i < segments.length - 3; i++) {
      const element = {
        type: segments[3 + i].fields[4],
        value: segments[3 + i].fields[5],
        measure: segments[3 + i].fields[6],
      };
      forData.push(element);
    }

    try {
      let url = `http://localhost:4000/api/orders/` + testId;
      console.log(url);
      let res = axios.post(url, forData);
    } catch (error) {
      console.log(error);
    }
  }
});

// Send outbound messages
server.send('10.10.1.74', 10000, 'got it', function (err, ackData) {
  // async callback code here
});

// console.log(
//   array[3].fields[4] + ' ' + array[3].fields[5] + ' ' + array[3].fields[6]
// );
