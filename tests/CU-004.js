const { iniciarRutina } = require('./db'); // Ajusta la ruta según tu estructura de proyecto

// Datos de ejemplo para las pruebas
const usuarioValido = {
  nombreUsuario: "juanchow__",
  contraseña: "password123",
  rutinaSeleccionada: {
    idRutina: 1,
    nombre: "Rutina de fuerza",
    ejercicios: [
      { nombre: "Sentadillas", repeticiones: 15, sets:3 },
      { nombre: "Lagartijas", repeticiones: 10, sets:2 }
    ]
  }
};

const usuarioConDatosInvalidos = {
  nombreUsuario: "juanchow__",
  contraseña: "password123",
  rutinaSeleccionada: {
    idRutina: 1,
    nombre: "Rutina de fuerza",
    ejercicios: [
      { nombre: "Sentadillas", repeticiones: -1, sets:3 },
      { nombre: "Lagartijas", repeticiones: 10, sets:-2 }
    ]
  }
};

test("Iniciar rutina exitosamente", () => {
  const resultado = iniciarRutina(usuarioValido);
  expect(resultado).toBe("Rutina iniciada correctamente");
});

test("Iniciar rutina con datos invalidos", () => {
  const resultado = iniciarRutina(usuarioSinRutina);
  expect(resultado).toBe("Error: La rutina contiene datos invalidos");
});

test("Iniciar rutina sin conexión a internet", () => {
  // Simular conexión a internet fallida
  const sinInternet = () => false;

  const resultado = iniciarRutina(usuarioValido, { conexion: sinInternet });
  expect(resultado).toBe("Error: Sin conexión a internet");
});

test("Iniciar rutina con servidor inactivo", () => {
  // Simular un servidor inactivo
  const servidorInactivo = () => {
    throw new Error("Error: Servidor inactivo");
  };

  const resultado = iniciarRutina(usuarioValido, { verificarServidor: servidorInactivo });
  expect(resultado).toBe("Error: No se pudo iniciar la rutina");
});