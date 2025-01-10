const { iniciarSesion, verificarCredenciales } = require('./db'); // Ajusta la ruta según tu proyecto

// Datos de ejemplo para las pruebas
const usuarioValido = {
  correo: "usuario@example.com",
  contraseña: "password123"
};

const usuarioInvalido = {
  correo: "usuario@example.com",
  contraseña: "contraseñaIncorrecta"
};

const usuarioNoRegistrado = {
  correo: "no_registrado@example.com",
  contraseña: "password123"
};

test("Inicio de sesión exitoso", () => {
  const resultado = iniciarSesion(usuarioValido);
  expect(resultado).toBe("Inicio de sesión exitoso");
});

test("Inicio de sesión con credenciales inválidas", () => {
  const resultado = iniciarSesion(usuarioInvalido);
  expect(resultado).toBe("Error: Credenciales incorrectas");
});

test("Inicio de sesión con usuario no registrado", () => {
  const resultado = iniciarSesion(usuarioNoRegistrado);
  expect(resultado).toBe("Error: Usuario no registrado");
});

test("Inicio de sesión sin conexión a internet", () => {
  // Simular conexión a internet fallida
  const sinInternet = () => false;

  const resultado = iniciarSesion(usuarioValido, { conexion: sinInternet });
  expect(resultado).toBe("Error: Sin conexión a internet");
});

test("Inicio de sesión con servidor inactivo", () => {
  // Simular un servidor inactivo
  const servidorInactivo = () => {
    throw new Error("Error: Servidor inactivo");
  };

  const resultado = iniciarSesion(usuarioValido, { verificarServidor: servidorInactivo });
  expect(resultado).toBe("Error: Servidor no disponible");
});