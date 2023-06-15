const nodes7 = require('./node_modules/nodes7'); // This is the package name, if the repository is cloned you may need to require 'nodeS7' with uppercase S
let conn = new nodes7;
let doneReading = false;
let doneWriting = false;
let estadosEstaciones = [
  {
    nombre: 'a420',
    bit0: true,
    bit1: false,
    bit2: true,
    bit3: false,
    bit4: false,
    bit5: false,
    bit6: false,
    bit7: true
  },
  {
    nombre: 'a430',
    bit0: true,
    bit1: false,
    bit2: true,
    bit3: false,
    bit4: false,
    bit5: false,
    bit6: false,
    bit7: true
  },
  {
    nombre: 'a440',
    bit0: true,
    bit1: false,
    bit2: true,
    bit3: false,
    bit4: false,
    bit5: false,
    bit6: false,
    bit7: true
  }
];
// const variables = {
//     //   TEST1: 'MR4',          // Memory real at MD4
//     //   TEST2: 'M32.2',        // Bit at M32.2
//     //   TEST3: 'M20.0',        // Bit at M20.0
//     //   TEST4: 'DB1,REAL0.20', // Array of 20 values in DB1
//     //   TEST5: 'DB1,REAL4',    // Single real value
//     //   TEST6: 'DB1,REAL8',    // Another single real value
//     //   TEST7: 'DB1,INT12.2',  // Two integer value array
//     //   TEST8: 'DB1,LREAL4',   // Single 8-byte real value
//     //   TEST9: 'DB1,X14.0',    // Single bit in a data block
//       420: 'DB2,X4.0.8' , // Array of 8 bits in a data block
//       430: 'DB2,X4.0.8' , // Array of 8 bits in a data block
//       440: 'DB2,X4.0.8'
// };

// conn.initiateConnection({ port: 102, host: '192.168.16.53', rack: 0, slot: 2, debug: false }, connected); // slot 2 for 300/400, slot 1 for 1200/1500, change debug to true to get more info
// // conn.initiateConnection({port: 102, host: '192.168.0.2', localTSAP: 0x0100, remoteTSAP: 0x0200, timeout: 8000, doNotOptimize: true}, connected);
// // local and remote TSAP can also be directly specified instead. The timeout option specifies the TCP timeout.

// function connected(err) {
//   if (typeof(err) !== "undefined") {
//     // We have an error. Maybe the PLC is not reachable.
//     console.log(err);
//     process.exit();
//   }
//   conn.setTranslationCB(function(tag) { return variables[tag]; }); // This sets the "translation" to allow us to work with object names
//   conn.addItems(['420', '430', '440']);
//   //conn.addItems('TEST6');
//   // conn.removeItems(['TEST2', 'TEST3']); // We could do this.
//   // conn.writeItems(['TEST5', 'TEST6'], [ 867.5309, 9 ], valuesWritten); // You can write an array of items as well.
//   // conn.writeItems('TEST7', [666, 777], valuesWritten); // You can write a single array item too.
//   //conn.writeItems('TEST3', true, valuesWritten); // This writes a single boolean item (one bit) to true
//  setInterval( peticion=()=> {conn.readAllItems(valuesReady)},1000) ;
// }

// function valuesReady(anythingBad, values) {
//   if (anythingBad) { console.log("SOMETHING WENT WRONG READING VALUES!!!!"); }
  

// estadosEstaciones = convertirVariable(values)
//   console.log(estaciones)
//   doneReading = true;
//   if (doneWriting) { process.exit(); }
// }

// // function valuesWritten(anythingBad) {
// //   if (anythingBad) { console.log("SOMETHING WENT WRONG WRITING VALUES!!!!"); }
// //   console.log("Done writing.");
// //   doneWriting = true;
// //   if (doneReading) { process.exit(); }
// // }

// function convertirVariable(variable) {
//     const estaciones = [];
  
//     for (const nombre in variable) {
//       if (variable.hasOwnProperty(nombre)) {
//         const bits = variable[nombre];
//         const estacion = {
//           nombre: nombre,
//           bit0: bits[0],
//           bit1: bits[1],
//           bit2: bits[2],
//           bit3: bits[3],
//           bit4: bits[4],
//           bit5: bits[5],
//           bit6: bits[6],
//           bit7: bits[7]
//         };
//         estaciones.push(estacion);
//       }
//     }
  
//     return estaciones;
//   }

console.log(estadosEstaciones)

 
module.exports = estadosEstaciones;