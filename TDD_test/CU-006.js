const { editarRutina } = require('./db'); // Ajusta la ruta según tu estructura del proyecto

// Datos de ejemplo para las pruebas
const rutinaOriginal = {
  idUsuario: 1,
  idRutina: 1,
  ejercicios: [
    { nombre: "Sentadillas", repeticiones: 15 },
    { nombre: "Lagartijas", repeticiones: 10 }
  ]
};

const rutinaEditada = {
  idUsuario: 1,
  idRutina: 1,
  ejercicios: [
    { nombre: "Lagartijas", repeticiones: 20 },
    { nombre: "Sentadillas", repeticiones: 15 }
  ]
};

test("Editar rutina exitosamente", () => {
  const resultado = editarRutina(rutinaOriginal, rutinaEditada);
  expect(resultado).toBe("Rutina editada y guardada correctamente");
});

test("Editar rutina sin cambios", () => {
  const resultado = editarRutina(rutinaOriginal, rutinaOriginal);
  expect(resultado).toBe("No se realizaron cambios en la rutina");
});

test("Editar rutina sin conexión a internet", () => {
  // Simula la ausencia de conexión a internet
  const sinInternet = () => false;

  const resultado = editarRutina(rutinaOriginal, rutinaEditada, { conexion: sinInternet });
  expect(resultado).toBe("Error: Sin conexión a internet");
});

test("Editar rutina con servidor inactivo", () => {
  // Simula un servidor inactivo
  const servidorInactivo = () => {
    throw new Error("Error: Servidor inactivo");
  };

  const resultado = editarRutina(rutinaOriginal, rutinaEditada, { verificarServidor: servidorInactivo });
  expect(resultado).toBe("Error: No se pudo guardar la rutina editada");
});
