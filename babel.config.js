module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel", // Asegúrate de que este plugin esté instalado correctamente
    ],
  };
};

