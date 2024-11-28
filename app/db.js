import * as SQLite from 'expo-sqlite';
const db = await SQLite.openDatabaseAsync('../assets/mydb.db');

const createTable = async () => {
    try {
        await db.execAsync(
            'CREATE TABLE IF NOT EXISTS usuarios (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, nombre VARCHAR(12) NOT NULL UNIQUE, contra VARCHAR(20) NOT NULL, nivel VARCHAR(15)NOT NULL, objetivo VARCHAR(30) NOT NULL, altura INTEGER NOT NULL, peso INTEGER NOT NULL);');
        console.log('Tabla creada (o ya existía)');
    } catch (error) {
        console.error('Error al crear la tabla:', error);
    }
};

const anadirUsuario = async (nombre,contra,estatura,peso,objetivo,nivel,callback) => {
    try {
        const resultado = await db.runAsync(
            'INSERT INTO usuarios (nombre, contra, nivel, objetivo, altura, peso) VALUES (?,?,?,?,?,?);',
            [nombre, contra, nivel, objetivo, estatura, peso]
        );
        console.log('Usuario agregado', resultado); // Aquí puedes ver el resultado de la inserción
        callback(true);
    } catch (error) {
        console.log('No se pudo agregar el usuario:', error);
        callback(false, error);
    }
    
    /*db.runAsync(tx => {
        tx.executeSql(
            'INSERT INTO usuarios (nombre,contra,nivel,objetivo,altura,peso) VALUES (?,?,?,?,?,?);',
            [nombre,contra,nivel,objetivo,estatura,peso],
            (_, result) => {
                console.log('Se agrego usuario');
                callback(true);
            },
            (_, error) => {
                console.log('no se pudo agregar usuario: ', error);
                callback(false,error);
            }
        );
    });*/
};

export { createTable, anadirUsuario};