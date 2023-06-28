
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
const inicial =[{
      nombre: 'inicial',
      bit0: false,
      bit1: false,
      bit2: false,
      bit3: false,
      bit4: false,
      bit5: false,
      bit6: false,
      bit7: false
    }];
const fallo = [{ nombre: 'FALLO',
      bit0: false,
      bit1: false,
      bit2: false,
      bit3: false,
      bit4: false,
      bit5: false,
      bit6: false,
      bit7: true
    }]
let connVK1 = new nodes7();
let connVK2 = new nodes7();
let connVK3 = new nodes7();

let estadosEstacionesVK1 = inicial;
let estadosEstacionesVK2 = inicial;
let estadosEstacionesVK3 = inicial;
const variablesOrdenadasvk1= ['op10', 'op15', 'op20', 'op25', 'kam30', 'op30', 'op40', 'op45', 'op50', 'op55', 'kam60', 'op60', 'op70', 'op80', 'op90', 'op100', 'op120', 'op125', 'op130', 'op140', 'op140s', 'elv1', 'op630', 'op640', 'op150', 'op170', 'op175', 'op180', 'op190', 'op210', 'op215', 'op2200', 'op2201', 'op2300', 'op2301', 'kam240', 'op250', 'op2600', 'op2601', 'op270', 'op280', 'op310', 'op320', 'm330', 'op330', 'op340', 'sr350', 'op360', 'elv2', 'elv3', 'm370', 'op420', 'op430', 'op430s', 'op440', 'op470', 'op5300', 'op5301', 'sr540', 'm550', 'op555', 'op5600', 'op5601', 's560', 'op565', 'op578', 'op580', 'op600', 'sr610', 'm620', 'elv4']
const variablesOrdenadasvk2=[]
const variablesOrdenadasvk3=[]
const variablesVK1 = {
  op10:'DB5,X0.0.8',
  op15:'DB5,X1.0.8',
  op20:'DB5,X2.0.8',
  op25:'DB5,X3.0.8',
  kam30:'DB5,X4.0.8',
  op30:'DB5,X5.0.8',
  op40:'DB5,X6.0.8',
  op45:'DB5,X7.0.8',
  op50:'DB5,X8.0.8',
  op55:'DB5,X9.0.8',
  kam60:'DB5,X10.0.8',
  op60:'DB5,X11.0.8',
  op70:'DB5,X12.0.8',
  op80:'DB5,X13.0.8',
  op90:'DB5,X14.0.8',
  op100:'DB5,X15.0.8',
  op120:'DB5,X16.0.8',
  op125:'DB5,X17.0.8',
  op130:'DB5,X18.0.8',
  op140:'DB5,X19.0.8',
  op140s:'DB5,X20.0.8',
  elv1:'DB5,X26.0.8',
  op630:'DB5,X27.0.8',
  op640:'DB5,X28.0.8',
  op150:'DB5,X29.0.8',
  op170:'DB5,X30.0.8',
  op175:'DB5,X31.0.8',
  op180:'DB5,X32.0.8',
  op190:'DB5,X33.0.8',
  op210:'DB5,X34.0.8',
  op215:'DB5,X35.0.8',
  op2200:'DB5,X36.0.8',
  op2201:'DB5,X37.0.8',
  op2300:'DB5,X38.0.8',
  op2301:'DB5,X39.0.8',
  kam240:'DB5,X40.0.8',
  op250:'DB5,X41.0.8',
  op2600:'DB5,X42.0.8',
  op2601:'DB5,X43.0.8',
  op270:'DB5,X44.0.8',
  op280:'DB5,X45.0.8',
  op310:'DB5,X46.0.8',
  op320:'DB5,X47.0.8',
  m330:'DB5,X49.0.8',
  op330:'DB5,X50.0.8',
  op340:'DB5,X51.0.8',
  sr350:'DB5,X52.0.8',
  op360:'DB5,X55.0.8',
  elv2:'DB5,X56.0.8',
  elv3:'DB5,X64.0.8',
  m370:'DB5,X65.0.8',
  op420:'DB5,X68.0.8',
  op430:'DB5,X69.0.8',
  op430s:'DB5,X70.0.8',
  op440:'DB5,X71.0.8',
  op470:'DB5,X72.0.8',
  op5300:'DB5,X73.0.8',
  op5301:'DB5,X74.0.8',
  sr540:'DB5,X75.0.8', 
  m550:'DB5,X76.0.8',
  op555:'DB5,X77.0.8',
  op5600:'DB5,X78.0.8',
  op5601:'DB5,X79.0.8',
  s560:'DB5,X80.0.8',
  op565:'DB5,X81.0.8',
  op578:'DB5,X84.0.8',
  op580:'DB5,X85.0.8',
  op600:'DB5,X86.0.8',
  sr610:'DB5,X87.0.8',
  m620:'DB5,X88.0.8',
  elv4:'DB5,X89.0.8'
};

const variablesVK2 = {
  
};

const variablesVK3 = {
      
};
function connectedVK1(err) {
  if (err) {
    console.log(`Error al conectar con vk1: ${err}`);
    estadosEstacionesVK1 = fallo;
  } else {
    connVK1.setTranslationCB(function (tag) { return variablesVK1[tag]; });
    connVK1.addItems(variablesOrdenadasvk1);
    setInterval(() => { connVK1.readAllItems(valuesReadyVK1); }, 1000);
  }
}

function connectedVK2(err) {
  if (err) {
    console.log(`Error al conectar con vk2: ${err}`);
    estadosEstacionesVK2 = fallo;
  } else {
    connVK2.setTranslationCB(function (tag) { return variablesVK2[tag]; });
    connVK2.addItems(variablesOrdenadasvk2);
    setInterval(() => { connVK2.readAllItems(valuesReadyVK2); }, 1000);
  }
}

function connectedVK3(err) {
  if (err) {
    console.log(`Error al conectar con vk3: ${err}`);
    estadosEstacionesVK3 = fallo;
  } else {
    connVK3.setTranslationCB(function (tag) { return variablesVK3[tag]; });
    connVK3.addItems(variablesOrdenadasvk3);
    setInterval(() => { connVK3.readAllItems(valuesReadyVK3); }, 1000);
  }
}

function valuesReadyVK1(anythingBad, values) {
  
  estadosEstacionesVK1 = convertirVariable(values,variablesOrdenadasvk1);
  console.log(estadosEstacionesVK1);
}

function valuesReadyVK2(anythingBad, values) {
  estadosEstacionesVK2 = convertirVariable(values,variablesOrdenadasvk2);
  //console.log(estadosEstacionesVK2);
}

function valuesReadyVK3(anythingBad, values) {
  estadosEstacionesVK3 = convertirVariable(values,variablesOrdenadasvk3);
 // console.log(estadosEstacionesVK3);
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

const connectAll = async () => {
  try {
    await Promise.all([connectVK1(), connectVK2(), connectVK3()]);
    console.log('Todas las conexiones establecidas correctamente');
  } catch (error) {
    console.log('Error al establecer una o más conexiones. Volviendo a intentar...');
    setTimeout(connectAll, 60000); // Reintentar conexión después de 60 segundos
  }
};

function connectVK1() {
  return new Promise((resolve, reject) => {
    connVK1.initiateConnection({ port: vk1Port, host: vk1IP, rack: 0, slot: 2, debug: false }, (err) => {
      if (err) {
        reject(err);
      } else {
        connectedVK1();
        resolve();
      }
    });
  });
}

function connectVK2() {
  return new Promise((resolve, reject) => {
    connVK2.initiateConnection({ port: vk2Port, host: vk2IP, rack: 0, slot: 2, debug: false }, (err) => {
      if (err) {
        reject(err);
      } else {
        connectedVK2();
        resolve();
      }
    });
  });
}

function connectVK3() {
  return new Promise((resolve, reject) => {
    connVK3.initiateConnection({ port: vk3Port, host: vk3IP, rack: 0, slot: 2, debug: false }, (err) => {
      if (err) {
        reject(err);
      } else {
        connectedVK3();
        resolve();
      }
    });
  });
}

const port = 3050;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
  connectAll();
});

// Importa las bibliotecas necesarias
const Sequelize = require('sequelize');
const moment = require('moment');

// Crea una instancia de Sequelize para conectarte a la base de datos
const sequelize = new Sequelize('xAcademy', 'root', 'vitto0712$', {
  host: 'localhost',
  dialect: 'mysql'
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos.');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
// Define el modelo de la tabla para almacenar los datos
const EstadoEstacion = sequelize.define('EstadoEstacion', {
  nombre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tiempoEncendida: {
    type: Sequelize.STRING,
    defaultValue: '00:00:00'
  },
  tiempoBasica: {
    type: Sequelize.STRING,
    defaultValue: '00:00:00'
  },
  tiempoAutomatico: {
    type: Sequelize.STRING,
    defaultValue: '00:00:00'
  },
  tiempoManual: {
    type: Sequelize.STRING,
    defaultValue: '00:00:00'
  },
  tiempoFalloTecnico: {
    type: Sequelize.STRING,
    defaultValue: '00:00:00'
  },
  tiempoEmergencia: {
    type: Sequelize.STRING,
    defaultValue: '00:00:00'
  },
  tiempoRejillaAbierta: {
    type: Sequelize.STRING,
    defaultValue: '00:00:00'
  },
  tiempoProduccion: {
    type: Sequelize.STRING,
    defaultValue: '00:00:00'
  }
});

// Sincroniza el modelo con la base de datos (crea la tabla si no existe)
EstadoEstacion.sync();

// Función para contar el tiempo en formato "hr:mm:ss"
function contarTiempo(estado) {
  const inicio = moment();
  let tiempo = moment.duration(estado.tiempo);

  if (estado.activo) {
    tiempo.add(moment().diff(inicio));
  }

  return moment.utc(tiempo.as('milliseconds')).format('HH:mm:ss');
}

// Función para guardar los datos en la base de datos
function guardarDatos(estados) {
  estados.forEach((estado) => {
    EstadoEstacion.findOne({ where: { nombre: estado.nombre } }).then((registro) => {
      if (registro) {
        registro.update({
          tiempoEncendida: contarTiempo({ tiempo: registro.tiempoEncendida, activo: estado.bit0 }),
          tiempoBasica: contarTiempo({ tiempo: registro.tiempoBasica, activo: estado.bit1 }),
          tiempoAutomatico: contarTiempo({ tiempo: registro.tiempoAutomatico, activo: estado.bit2 }),
          tiempoManual: contarTiempo({ tiempo: registro.tiempoManual, activo: estado.bit3 }),
          tiempoFalloTecnico: contarTiempo({ tiempo: registro.tiempoFalloTecnico, activo: estado.bit4 }),
          tiempoEmergencia: contarTiempo({ tiempo: registro.tiempoEmergencia, activo: estado.bit5 }),
          tiempoRejillaAbierta: contarTiempo({ tiempo: registro.tiempoRejillaAbierta, activo: estado.bit6 }),
          tiempoProduccion: contarTiempo({ tiempo: registro.tiempoProduccion, activo: estado.bit7 })
        });
      } else {
        EstadoEstacion.create({
          nombre: estado.nombre,
          tiempoEncendida: contarTiempo({ tiempo: '00:00:00', activo: estado.bit0 }),
          tiempoBasica: contarTiempo({ tiempo: '00:00:00', activo: estado.bit1 }),
          tiempoAutomatico: contarTiempo({ tiempo: '00:00:00', activo: estado.bit2 }),
          tiempoManual: contarTiempo({ tiempo: '00:00:00', activo: estado.bit3 }),
          tiempoFalloTecnico: contarTiempo({ tiempo: '00:00:00', activo: estado.bit4 }),
          tiempoEmergencia: contarTiempo({ tiempo: '00:00:00', activo: estado.bit5 }),
          tiempoRejillaAbierta: contarTiempo({ tiempo: '00:00:00', activo: estado.bit6 }),
          tiempoProduccion: contarTiempo({ tiempo: '00:00:00', activo: estado.bit7 })
        });
      }
    });
  });
}

// Llama a la función para guardar los datos en la base de datos
guardarDatos(estadosEstacionesVK1);
