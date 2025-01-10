const { evaluarRutina } = require('./db'); // Ajusta la ruta según tu estructura del proyecto

// Datos de ejemplo para las pruebas
const rutinaFinalizada = {
  idUsuario: 1,
  idRutina: 1,
  dificultadPercibida: 4,
  nivelCansancio: 5
};

const rutinaSinEvaluacion = {
  idUsuario: 1,
  idRutina: 1,
  dificultadPercibida: null,
  nivelCansancio: null
};

test("Evaluar rutina exitosamente", () => {
  const resultado = evaluarRutina(rutinaFinalizada);
  expect(resultado).toBe("Evaluación registrada correctamente");
});

test("Evaluar rutina con datos incompletos", () => {
  const resultado = evaluarRutina(rutinaSinEvaluacion);
  expect(resultado).toBe("Error: Datos de evaluación incompletos");
});

test("Evaluar rutina sin conexión a internet", () => {
  // Simula la ausencia de conexión a internet
  const sinInternet = () => false;

  const resultado = evaluarRutina(rutinaFinalizada, { conexion: sinInternet });
  expect(resultado).toBe("Error: Sin conexión a internet");
});

test("Evaluar rutina con servidor inactivo", () => {
  // Simula un servidor inactivo
  const servidorInactivo = () => {
    throw new Error("Error: Servidor inactivo");
  };

  const resultado = evaluarRutina(rutinaFinalizada, { verificarServidor: servidorInactivo });
  expect(resultado).toBe("Error: No se pudo registrar la evaluación");
});
