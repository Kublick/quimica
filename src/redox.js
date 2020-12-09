const ackJSON = {
  MSH: {
    '0': 'MSH',
    '1': '|',
    '2': '^~\\&',
    '3': {
      '1': 'CHERDABEE',
    },
    '5': {
      '1': 'REDOX',
    },
    '6': {
      '1': 'RDX',
    },
    '7': {
      '1': '20150915004731',
    },
    '9': {
      '1': 'ACK',
      '2': 'S12',
    },
    '10': '20150915004731',
    '11': {
      '1': 'T',
    },
    '12': {
      '1': '2.3',
    },
  },
  MSA: {
    '0': 'MSA',
    '1': 'AA',
    '2': '1',
  },
};

const hl7v2 = require('@redoxengine/redox-hl7-v2');
const generator = new hl7v2.Generator();
const data = hl7v2.Generator(write(ackJSON));

console.log(data);
