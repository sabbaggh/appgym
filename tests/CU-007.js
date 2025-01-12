const { finalizarRutina } = require('./db'); // Ajusta la ruta según tu estructura del proyecto

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

test("Finalizar rutina exitosamente", () => {
  const resultado = finalizarRutina(rutinaFinalizada);
  expect(resultado).toBe("Rutina finalizada y guardada correctamente");
});

test("Finalizar rutina no iniciada", () => {
  const resultado = finalizarRutina(rutinaNoIniciada);
  expect(resultado).toBe("Error: No se ha iniciado ninguna rutina");
});

test("Finalizar rutina sin conexión a internet", () => {
  // Simula la ausencia de conexión a internet
  const sinInternet = () => false;

  const resultado = finalizarRutina(rutinaFinalizada, { conexion: sinInternet });
  expect(resultado).toBe("Error: Sin conexión a internet");
});

test("Finalizar rutina con servidor inactivo", () => {
  // Simula un servidor inactivo
  const servidorInactivo = () => {
    throw new Error("Error: Servidor inactivo");
  };

  const resultado = finalizarRutina(rutinaFinalizada, { verificarServidor: servidorInactivo });
  expect(resultado).toBe("Error: No se pudo guardar la rutina finalizada");
});
