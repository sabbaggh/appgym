const { generarRutina } = require('./db'); // Ajusta la ruta según tu proyecto

// Datos de ejemplo para las pruebas
const usuarioValido = {
  correo: "usuario@example.com",
  contraseña: "password123",
  datosPersonales: {
    edad: 25,
    peso: 70,
    altura: 175,
    objetivo: "Ganar masa muscular"
  }
};

const usuarioSinDatosCompletos = {
  correo: "usuario@example.com",
  contraseña: "password123",
  datosPersonales: {
    edad: null,
    peso: 70,
    altura: 175,
    objetivo: ""
  }
};

test("Generar rutina exitosamente", () => {
  const resultado = generarRutina(usuarioValido);
  expect(resultado).toBe("Rutina generada exitosamente");
});

test("Generar rutina con datos incompletos", () => {
  const resultado = generarRutina(usuarioSinDatosCompletos);
  expect(resultado).toBe("Error: Datos incompletos");
});

test("Generar rutina sin conexión a internet", () => {
  // Simular conexión a internet fallida
  const sinInternet = () => false;

  const resultado = generarRutina(usuarioValido, { conexion: sinInternet });
  expect(resultado).toBe("Error: Sin conexión a internet");
});

test("Generar rutina con servidor inactivo", () => {
  // Simular un servidor inactivo
  const servidorInactivo = () => {
    throw new Error("Error: Servidor inactivo");
  };

  const resultado = generarRutina(usuarioValido, { verificarServidor: servidorInactivo });
  expect(resultado).toBe("Error: No se pudo generar la rutina");
});