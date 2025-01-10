const { finalizarRutina, actualizarDatosUsuario } = require('./db'); // Ajusta la ruta según tu estructura del proyecto

const datosActuales = {
  idUsuario: 1,
  altura: 175,
  peso: 70,
  objetivo: "Ganar masa muscular"
};

const nuevosDatos = {
  idUsuario: 1,
  altura: 180,
  peso: 75,
  objetivo: "Mantener forma"
};

const nuevosDatosInvalidos = {
  idUsuario: 1,
  altura: "",
  peso: 0,
  objetivo: "Mantener forma"
};

// Pruebas para actualizar datos del usuario
test("Actualizar datos exitosamente", () => {
  const resultado = actualizarDatosUsuario(datosActuales, nuevosDatos);
  expect(resultado).toBe("Datos actualizados correctamente");
});

test("Actualizar datos sin cambios", () => {
  const resultado = actualizarDatosUsuario(datosActuales, datosActuales);
  expect(resultado).toBe("No se realizaron cambios en los datos");
});

test("Actualizar datos con valores invalidos", () => {
  const resultado = actualizarDatosUsuario(datosActuales, nuevosDatosInvalidos);
  expect(resultado).toBe("No se realizaron cambios en los datos");
});

test("Actualizar datos sin conexión a internet", () => {
  const sinInternet = () => false;

  const resultado = actualizarDatosUsuario(datosActuales, nuevosDatos, { conexion: sinInternet });
  expect(resultado).toBe("Error: Sin conexión a internet");
});

test("Actualizar datos con servidor inactivo", () => {
  const servidorInactivo = () => {
    throw new Error("Error: Servidor inactivo");
  };

  const resultado = actualizarDatosUsuario(datosActuales, nuevosDatos, { verificarServidor: servidorInactivo });
  expect(resultado).toBe("Error: No se pudo guardar los datos actualizados");
});
