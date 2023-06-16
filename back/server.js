const express = require('express');
const cors = require('cors');
const convertirVariable = require('./modulos');
const nodes7 = require('./node_modules/nodes7');
const app = express();
app.use(cors());

const vk1IP = '192.168.16.50';
const vk1Port = 102;

const vk2IP = '192.168.16.51';
const vk2Port = 102;

const vk3IP = '192.168.16.53';
const vk3Port = 102;

let connVK1 = new nodes7();
let connVK2 = new nodes7();
let connVK3 = new nodes7();

let estadosEstacionesVK1 = [];
let estadosEstacionesVK2 = [];
let estadosEstacionesVK3 = [];

const variablesVK1 = {
  prueba:'DB2,X4.0.8'
};

const variablesVK2 = {
  elv1:'DB2,X320.0.8',
  a630:'DB2,X4.0.8',//modificar
  a640:'DB2,X4.0.8',
  sa150:'DB650,X0.0.8',
  a170:'DB2,X44.0.8',
  sa175:'DB650,X10.0.8',
  sa180:'DB650,X20.0.8',
  sa190:'DB650,X30.0.8',
  s210:'DB2,X4.0.8', //modificar
  a210:'DB2,X384.0.8',
  sa2200:'DB2,X84.0.8',
  sa2201:'DB2,X284.0.8',
  sa2300:'DB2,X568.0.8',
  sa2301:'DB2,X588.0.8',
  sa250:'DB2,X124.0.8',
  a2600:'DB2,X144.0.8',
  a2600:'DB2,X164.0.8',
  sa270:'DB2,X184.0.8',
  sa280:'DB2,X204.0.8',
  a310:'DB2,X224.0.8',
  a320:'DB2,X144.0.8',//modificar
  m330:'DB2,X144.0.8',//modificar
 a330:'DB2,X244.0.8',
  a340:'DB2,X424.0.8',
  sr350:'DB2,X264.0.8',
  a360:'DB2,404.0.8',
  elv2:'DB2,X324.0.8',
};

const variablesVK3 = {
  elv3:'DB2,X320.0.8',
      m370:'DB2,X4.0.8',
      a420:'DB2,X4.0.8',
      a430:'DB552,X18.0.8',
      a440:'DB2,X24.0.8',
      a470:'DB2,X64.0.8',
      a5300:'DB2,X84.0.8',
      a5301:'DB2,X264.0.8',
      sr540:'DB2,X104.0.8' , 
      m550:'DB2,X4.0.8' ,
      a5600:'DB2,X124.0.8' ,
      a5601:'DB2,X284.0.8',
      s560:'DB2,X224.0.8',
      a580:'DB2,X164.0.8',
      a590:'DB2,X284.0.8',
      sr610:'DB2,X204.0.8',
      m620:'DB2,X284.0.8',
      elv4:'DB2,X324.0.8',
};

// Configuración y conexión para vk1
connVK1.initiateConnection({ port: vk1Port, host: vk1IP, rack: 0, slot: 2, debug: false }, connectedVK1);

function connectedVK1(err) {
  if (err) {
    console.log(`Error al conectar con vk1: ${err}`);
    process.exit();
  }
  connVK1.setTranslationCB(function(tag) { return variablesVK1[tag]; });
  connVK1.addItems(['prueba']); // Agrega las variables correspondientes
  setInterval(() => { connVK1.readAllItems(valuesReadyVK1); }, 1000);
}

function valuesReadyVK1(anythingBad, values) {
  estadosEstacionesVK1 = convertirVariable(values);
  console.log(estadosEstacionesVK1);
}

// Configuración y conexión para vk2
connVK2.initiateConnection({ port: vk2Port, host: vk2IP, rack: 0, slot: 2, debug: false }, connectedVK2);

function connectedVK2(err) {
  if (err) {
    console.log(`Error al conectar con vk2: ${err}`);
    process.exit();
  }
  connVK2.setTranslationCB(function(tag) { return variablesVK2[tag]; });
  connVK2.addItems(['elv1']); // Agrega las variables correspondientes
  setInterval(() => { connVK2.readAllItems(valuesReadyVK2); }, 1000);
}

function valuesReadyVK2(anythingBad, values) {
  estadosEstacionesVK2 = convertirVariable(values);
  console.log(estadosEstacionesVK2);
}

// Configuración y conexión para vk3
connVK3.initiateConnection({ port: vk3Port, host: vk3IP, rack: 0, slot: 2, debug: false }, connectedVK3);

function connectedVK3(err) {
  if (err) {
    console.log(`Error al conectar con vk3: ${err}`);
    process.exit();
  }
  connVK3.setTranslationCB(function(tag) { return variablesVK3[tag]; });
  connVK3.addItems(['elv3']); // Agrega las variables correspondientes
  setInterval(() => { connVK3.readAllItems(valuesReadyVK3); }, 1000);
}

function valuesReadyVK3(anythingBad, values) {
  estadosEstacionesVK3 = convertirVariable(values);
  console.log(estadosEstacionesVK3);
}

// Rutas de API para cada VK
app.get('/vk1', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json(estadosEstacionesVK1);
});

app.get('/vk2', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json(estadosEstacionesVK2);
});

app.get('/vk3', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.json(estadosEstacionesVK3);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
