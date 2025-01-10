const { registrarUsuario, verificarDatos, verificarConexion, guardarEnBD } = require('./db'); // Ajusta la ruta según tu proyecto

// Datos de ejemplo para las pruebas
const usuarioValido = {
  nombreUsuario: "juanchow__",
  contraseña: "password123",
  objetivo: "Bajar de peso",
  nivel: "Medio",
  estatura: 175,
  peso: 80,
};

//datos vacios y peso supera lo maximo posible
const usuarioInvalido = {
  nombreUsuario: "juanchow__",
  contraseña: "",
  objetivo: "Bajar de peso",
  nivel: "Medio",
  estatura: 175,
  peso: 600
};

test("Registro exitoso", () => {
  const resultado = registrarUsuario(usuarioValido);
  expect(resultado).toBe("Registro exitoso");
});

test("Registro con datos inválidos", () => {
  const resultado = registrarUsuario(usuarioInvalido);
  expect(resultado).toBe("Error: Datos inválidos");
});

test("Registro sin conexión a internet", () => {
  // Simular conexión a internet fallida
  const sinInternet = () => false;
  const resultado = registrarUsuario(usuarioValido, { conexion: sinInternet });
  expect(resultado).toBe("Error: Sin conexión a internet");
});

test("Registro con error en base de datos", () => {
  // Simular error en la base de datos
  const errorGuardado = () => {
    throw new Error("Error en la base de datos");
  };
  const resultado = registrarUsuario(usuarioValido, { guardarDatos: errorGuardado });
  expect(resultado).toBe("Error: No se pudo completar el registro");
});

test("Redirección después del registro exitoso", () => {
  const resultado = registrarUsuario(usuarioValido);
  expect(resultado).toBe("Registro exitoso");
});