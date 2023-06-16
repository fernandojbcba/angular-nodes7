module.exports = function convertirVariable(variable) {
    const estaciones = [];
    
    for (const nombre in variable) {
      if (variable.hasOwnProperty(nombre)) {
        const bits = variable[nombre];
        const estacion = {
          nombre: nombre,
          bit0: bits[0],
          bit1: bits[1],
          bit2: bits[2],
          bit3: bits[3],
          bit4: bits[4],
          bit5: bits[5],
          bit6: bits[6],
          bit7: bits[7]
        };
        estaciones.push(estacion);
      }
    }
    
    return estaciones;
  };
  