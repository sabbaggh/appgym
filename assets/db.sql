sqlite3 base.db

CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `contra` VARCHAR(100) NOT NULL,
    `nivel` VARCHAR(15) NOT NULL DEFAULT 'Principiante',
    `objetivo` VARCHAR(30) NOT NULL DEFAULT 'Bajar de peso',
    `altura` INTEGER NOT NULL,
    `peso` INTEGER NOT NULL
);

INSERT INTO `usuarios` (`nombre`, `contra`, `nivel`, `objetivo`, `altura`, `peso`) VALUES
('Juan', 'contra123', 'Intermedio', 'Ganar masa muscular', 175, 70);