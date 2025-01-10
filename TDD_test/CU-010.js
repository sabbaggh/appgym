const { generarRutinaPersonalizada } = require('./db'); // Ajusta la ruta según tu proyecto

// Datos de ejemplo para las pruebas
const datosUsuario = {
  idUsuario: 1,
  objetivo: "Ganar masa muscular",
  complexion: "Media",
  nivelExperiencia: "Intermedio",
  historial: [
    { rutina: "Fuerza", evaluacion: { dificultad: 4, cansancio: 3 } },
    { rutina: "Cardio", evaluacion: { dificultad: 3, cansancio: 4 } }
  ]
};

const historialIncompleto = {
  idUsuario: 1,
  objetivo: "Perder grasa",
  complexion: "Delgada",
  nivelExperiencia: "Principiante",
  historial: []
};

test("Generar rutina personalizada exitosamente", () => {
  const resultado = generarRutinaPersonalizada(datosUsuario);
  expect(resultado).toBe("Rutina personalizada generada correctamente");
});

test("Generar rutina personalizada con historial incompleto", () => {
  const resultado = generarRutinaPersonalizada(historialIncompleto);
  expect(resultado).toBe("Rutina genérica generada correctamente");
});

test("Generar rutina personalizada sin conexión a internet", () => {
  // Simula la ausencia de conexión a internet
  const sinInternet = () => false;

  const resultado = generarRutinaPersonalizada(datosUsuario, { conexion: sinInternet });
  expect(resultado).toBe("Error: Sin conexión a internet");
});

test("Generar rutina personalizada con modelo inactivo", () => {
  // Simula un modelo de Machine Learning inactivo
  const modeloInactivo = () => {
    throw new Error("Error: Modelo no disponible");
  };

  const resultado = generarRutinaPersonalizada(datosUsuario, { verificarModelo: modeloInactivo });
  expect(resultado).toBe("Error: No se pudo generar la rutina personalizada");
});
