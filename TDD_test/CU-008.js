const { finalizarRutina, actualizarDatosUsuario } = require('./db'); // Ajusta la ruta según tu estructura del proyecto

// Datos de ejemplo para las pruebas
const rutinaFinalizada = {
  idUsuario: 1,
  idRutina: 1,
  estado: "completada"
};

const rutinaNoIniciada = {
  idUsuario: 1,
  idRutina: null,
  estado: "no iniciada"
};

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

// Pruebas para finalizar rutina
test("Finalizar rutina exitosamente", () => {
  const resultado = finalizarRutina(rutinaFinalizada);
  expect(resultado).toBe("Rutina finalizada y guardada correctamente");
});

test("Finalizar rutina no iniciada", () => {
  const resultado = finalizarRutina(rutinaNoIniciada);
  expect(resultado).toBe("Error: No se ha iniciado ninguna rutina");
});

test("Finalizar rutina sin conexión a internet", () => {
  const sinInternet = () => false;

  const resultado = finalizarRutina(rutinaFinalizada, { conexion: sinInternet });
  expect(resultado).toBe("Error: Sin conexión a internet");
});

test("Finalizar rutina con servidor inactivo", () => {
  const servidorInactivo = () => {
    throw new Error("Error: Servidor inactivo");
  };

  const resultado = finalizarRutina(rutinaFinalizada, { verificarServidor: servidorInactivo });
  expect(resultado).toBe("Error: No se pudo guardar la rutina finalizada");
});

// Pruebas para actualizar datos del usuario
test("Actualizar datos exitosamente", () => {
  const resultado = actualizarDatosUsuario(datosActuales, nuevosDatos);
  expect(resultado).toBe("Datos actualizados correctamente");
});

test("Actualizar datos sin cambios", () => {
  const resultado = actualizarDatosUsuario(datosActuales, datosActuales);
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
