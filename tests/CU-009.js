const { ajustarModeloML } = require('./db'); // Ajusta la ruta según tu proyecto

// Datos para ajuste de modelo
const evaluacionesUsuario = [
  { dificultadPercibida: 3, nivelCansancio: 4 },
  { dificultadPercibida: 5, nivelCansancio: 5 },
  { dificultadPercibida: 2, nivelCansancio: 3 }
];

test("Ajustar modelo exitosamente", () => {
  const resultado = ajustarModeloML(evaluacionesUsuario);
  expect(resultado).toBe("Modelo ajustado correctamente");
});

test("Ajustar modelo sin datos", () => {
  const resultado = ajustarModeloML([]);
  expect(resultado).toBe("Error: Datos insuficientes para ajustar el modelo");
});

test("Ajustar modelo sin conexión a internet", () => {
  // Simula la ausencia de conexión a internet
  const sinInternet = () => false;

  const resultado = ajustarModeloML(evaluacionesUsuario, { conexion: sinInternet });
  expect(resultado).toBe("Error: Sin conexión a internet");
});

test("Ajustar modelo con servidor inactivo", () => {
  // Simula un servidor inactivo
  const servidorInactivo = () => {
    throw new Error("Error: Servidor inactivo");
  };

  const resultado = ajustarModeloML(evaluacionesUsuario, { verificarServidor: servidorInactivo });
  expect(resultado).toBe("Error: No se pudo ajustar el modelo");
});
